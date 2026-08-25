"use client";

import { useState, useRef, useCallback } from "react";
import { getAllRegions } from "@/lib/region-utils";

type Contribution = {
  id: string;
  regionSlug: string;
  type: "phrase" | "expression" | "cultural-note" | "audio";
  text: string;
  transliteration?: string;
  meaning?: string;
  context?: string;
  audioBlob?: string;
  audioName?: string;
  timestamp: number;
};

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function getStoredContributions(): Contribution[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("voi-contributions");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveContributions(contribs: Contribution[]) {
  localStorage.setItem("voi-contributions", JSON.stringify(contribs));
}

export default function ContributeForm() {
  const regions = getAllRegions();
  const [selectedRegion, setSelectedRegion] = useState("");
  const [contributionType, setContributionType] = useState<Contribution["type"]>("phrase");
  const [text, setText] = useState("");
  const [transliteration, setTransliteration] = useState("");
  const [meaning, setMeaning] = useState("");
  const [context, setContext] = useState("");
  const [audioName, setAudioName] = useState("");
  const [audioBlob, setAudioBlob] = useState<string | undefined>();
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [saved, setSaved] = useState(false);
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [showList, setShowList] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const reader = new FileReader();
        reader.onloadend = () => {
          setAudioBlob(reader.result as string);
          setAudioName("recorded-audio.webm");
        };
        reader.readAsDataURL(blob);
        stream.getTracks().forEach((t) => t.stop());
        setIsRecording(false);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch {
      alert("Microphone access is required to record audio.");
    }
  }, []);

  const stopRecording = useCallback(() => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  }, []);

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setAudioBlob(reader.result as string);
      setAudioName(file.name);
    };
    reader.readAsDataURL(file);
  }, []);

  const previewAudio = useCallback(() => {
    if (!audioBlob) return;
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      return;
    }
    const audio = new Audio(audioBlob);
    audioRef.current = audio;
    audio.onended = () => setIsPlaying(false);
    audio.play();
    setIsPlaying(true);
  }, [audioBlob, isPlaying]);

  const handleSubmit = () => {
    if (!selectedRegion || !text.trim()) return;

    const contrib: Contribution = {
      id: generateId(),
      regionSlug: selectedRegion,
      type: contributionType,
      text: text.trim(),
      transliteration: transliteration.trim() || undefined,
      meaning: meaning.trim() || undefined,
      context: context.trim() || undefined,
      audioBlob,
      audioName,
      timestamp: Date.now(),
    };

    const existing = getStoredContributions();
    const updated = [...existing, contrib];
    saveContributions(updated);
    setContributions(updated);
    setSaved(true);
    setText("");
    setTransliteration("");
    setMeaning("");
    setContext("");
    setAudioBlob(undefined);
    setAudioName("");
    setTimeout(() => setSaved(false), 3000);
  };

  const loadContributions = () => {
    setContributions(getStoredContributions());
    setShowList(true);
  };

  const deleteContribution = (id: string) => {
    const updated = contributions.filter((c) => c.id !== id);
    saveContributions(updated);
    setContributions(updated);
  };

  const exportData = () => {
    const blob = new Blob([JSON.stringify(contributions, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "voices-of-india-contributions.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const typeLabels: Record<Contribution["type"], string> = {
    phrase: "Phrase",
    expression: "Expression",
    "cultural-note": "Cultural Note",
    audio: "Audio Clip",
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-stone-800 mb-1">Add your contribution</h2>
        <p className="text-sm text-stone-500">
          Record audio, add phrases, expressions, or cultural notes from your region.
        </p>
      </div>

      {saved && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-700 text-sm font-medium">
          Contribution saved! You can add more or view your submissions below.
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Region</label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          >
            <option value="">Select a state/region</option>
            {regions.map((r) => (
              <option key={r.slug} value={r.slug}>{r.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Type</label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(typeLabels) as Array<Contribution["type"]>).map((type) => (
              <button
                key={type}
                onClick={() => setContributionType(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  contributionType === type
                    ? "bg-orange-500 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {typeLabels[type]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            {contributionType === "cultural-note" ? "Title" : "Text (in local language)"}
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={
              contributionType === "phrase" ? "e.g. Namaskaram" :
              contributionType === "expression" ? "e.g. Abba!" :
              contributionType === "cultural-note" ? "e.g. Pongal celebrations" :
              "Audio clip title"
            }
            className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>

        {contributionType !== "cultural-note" && contributionType !== "audio" && (
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Transliteration (optional)</label>
            <input
              type="text"
              value={transliteration}
              onChange={(e) => setTransliteration(e.target.value)}
              placeholder="Romanized version"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            {contributionType === "cultural-note" ? "Description" : "English meaning"}
          </label>
          <input
            type="text"
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
            placeholder="What does it mean?"
            className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>

        {contributionType === "expression" && (
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Context</label>
            <input
              type="text"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="When is this used?"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">Audio (optional)</label>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isRecording
                  ? "bg-red-500 text-white animate-pulse"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="8" />
              </svg>
              {isRecording ? "Stop recording" : "Record audio"}
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-100 text-stone-600 hover:bg-stone-200 rounded-xl text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              Upload audio
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
          {audioBlob && (
            <div className="mt-3 flex items-center gap-3 bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5">
              <button
                onClick={previewAudio}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
                ) : (
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                )}
              </button>
              <span className="text-sm text-stone-600">{audioName}</span>
              <button
                onClick={() => { setAudioBlob(undefined); setAudioName(""); }}
                className="ml-auto text-stone-400 hover:text-red-500 transition-colors"
                aria-label="Remove audio"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!selectedRegion || !text.trim()}
          className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-stone-200 disabled:text-stone-400 text-white font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
        >
          Submit contribution
        </button>
      </div>

      <div className="border-t border-stone-100 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-stone-800">Your contributions</h3>
          <div className="flex gap-2">
            <button
              onClick={loadContributions}
              className="px-3 py-1.5 text-sm text-stone-500 hover:text-orange-500 transition-colors"
            >
              View all
            </button>
            {contributions.length > 0 && (
              <button
                onClick={exportData}
                className="px-3 py-1.5 text-sm text-teal-600 hover:text-teal-700 transition-colors"
              >
                Export JSON
              </button>
            )}
          </div>
        </div>

        {showList && contributions.length === 0 && (
          <p className="text-sm text-stone-400">No contributions yet. Add your first one above!</p>
        )}

        {showList && contributions.length > 0 && (
          <div className="space-y-2">
            {contributions.map((c) => (
              <div key={c.id} className="flex items-start gap-3 p-3 bg-stone-50 border border-stone-100 rounded-xl">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-semibold uppercase text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">
                      {typeLabels[c.type]}
                    </span>
                    <span className="text-xs text-stone-400">
                      {regions.find((r) => r.slug === c.regionSlug)?.name}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-stone-800 truncate">{c.text}</p>
                  {c.meaning && <p className="text-xs text-stone-500 truncate">{c.meaning}</p>}
                  {c.audioBlob && <p className="text-xs text-teal-500 mt-0.5">Has audio</p>}
                </div>
                <button
                  onClick={() => deleteContribution(c.id)}
                  className="text-stone-300 hover:text-red-500 transition-colors flex-shrink-0"
                  aria-label="Delete"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
