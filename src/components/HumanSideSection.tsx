import { useState } from 'react';
import { Heart, Quote, MessageSquareHeart, Send, Sparkles, CheckCircle2, UserCheck, Shield } from 'lucide-react';
import { PATIENT_STORIES, PatientStory } from '../data/campaignData';

export default function HumanSideSection() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [gratitudeNotes, setGratitudeNotes] = useState<Array<{ name: string; message: string; date: string; school?: string }>>([
    {
      name: 'Karim A.',
      school: 'Kasr Al-Ainy Faculty of Medicine, Cairo University',
      message: 'Donated platelets at Hospital 57357 for the first time after learning about children with leukemia. The feeling of responsibility and impact is immense!',
      date: 'Today'
    },
    {
      name: 'Nourhan S.',
      school: 'Faculty of Science, Alexandria University',
      message: 'Youssef’s story and the children living with Thalassemia opened our eyes. We mobilized our whole student group to visit the Kom El-Dikka Regional Center.',
      date: 'Yesterday'
    },
    {
      name: 'Eng. Ahmed Shokry',
      school: 'Tanta University Alumni',
      message: 'My mother needed 4 units during emergency surgery, and an anonymous donor saved her life. Endless gratitude to every voluntary donor in Egypt.',
      date: '2 days ago'
    }
  ]);

  const [authorName, setAuthorName] = useState('');
  const [schoolAffiliation, setSchoolAffiliation] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const activeStory: PatientStory = PATIENT_STORIES[activeStoryIndex];

  const handlePostGratitude = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !noteContent.trim()) return;

    const newNote = {
      name: authorName.trim(),
      school: schoolAffiliation.trim() || 'Campus Supporter',
      message: noteContent.trim(),
      date: 'Just now'
    };

    setGratitudeNotes([newNote, ...gratitudeNotes]);
    setAuthorName('');
    setSchoolAffiliation('');
    setNoteContent('');
    setSubmittedSuccess(true);
    setTimeout(() => setSubmittedSuccess(false), 4000);
  };

  return (
    <section id="stories" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            Part 4: The Human Side
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Faces of the Transfusion Lifeline
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-2 leading-relaxed">
            Behind every barcode and blood cooler is a mother, a little child, a student, or a surgeon praying that the refrigerator isn't empty. Here are their true voices.
          </p>

          {/* Story Selector Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {PATIENT_STORIES.map((story, idx) => (
              <button
                key={story.id}
                onClick={() => setActiveStoryIndex(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeStoryIndex === idx
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/25 scale-102'
                    : 'bg-stone-100 text-gray-700 hover:bg-rose-50 hover:text-rose-700'
                }`}
              >
                <span>{story.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  activeStoryIndex === idx ? 'bg-white/20 text-white' : 'bg-white text-gray-500'
                }`}>
                  {story.tag}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Patient Story Card */}
        <div className="bg-gradient-to-br from-rose-950 via-gray-900 to-rose-900 text-white rounded-3xl p-6 sm:p-12 shadow-xl mb-16 relative overflow-hidden">
          {/* Subtle watermark quote icon */}
          <Quote className="absolute -top-4 -right-4 w-48 h-48 text-white/5 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left info column */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold mb-4">
                <span>{activeStory.recipientCategory}</span>
              </div>

              <div className="text-3xl sm:text-4xl font-black mb-1">
                {activeStory.name}
              </div>
              <div className="text-sm text-gray-300 mb-1">
                {activeStory.condition}
              </div>
              <div className="text-xs text-rose-300 font-bold mb-4 flex items-center gap-1.5">
                <span>🏥 {activeStory.hospital}</span>
                <span>•</span>
                <span>📍 {activeStory.location}</span>
              </div>

              <div className="space-y-3 bg-white/5 backdrop-blur-xs p-4 rounded-2xl border border-white/10 text-xs">
                <div>
                  <span className="text-gray-400 block uppercase text-[10px] tracking-wider">Transfusion Units Received:</span>
                  <span className="text-rose-300 font-extrabold text-sm">{activeStory.unitsReceived}</span>
                </div>
                <div>
                  <span className="text-gray-400 block uppercase text-[10px] tracking-wider">Current Milestone / Outcome:</span>
                  <span className="text-emerald-300 font-semibold">{activeStory.outcome}</span>
                </div>
              </div>

              <div className="mt-6 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Shared with patient & clinician permission to support donor awareness.</span>
              </div>
            </div>

            {/* Right Story & Quote column */}
            <div className="lg:col-span-7 lg:pl-4">
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-rose-400 mb-2 opacity-80" />
                <p className="text-xl sm:text-2xl font-bold leading-relaxed text-rose-50 italic">
                  “{activeStory.quote}”
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 font-normal">
                {activeStory.story}
              </p>

              <div className="p-4 rounded-2xl bg-rose-900/40 border border-rose-500/30">
                <div className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-1">
                  Message to Community Donors:
                </div>
                <p className="text-xs sm:text-sm text-gray-200 italic">
                  "{activeStory.donorGratitudeQuote}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Gratitude Wall */}
        <div className="bg-stone-50 rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Input Form */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
                <MessageSquareHeart className="w-4 h-4" />
                <span>Donor Wall of Encouragement</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">
                Leave a Note of Hope or Gratitude
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                Whether you just pledged, donated last week, or have a loved one whose life was saved by blood donors—share a 2-sentence note for campus and community donors.
              </p>

              <form onSubmit={handlePostGratitude} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Name / Alias</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan K. or Anonymous Student"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Campus / Major / Role (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Biology Sophomore, Pre-Med Club, or Community Member"
                    value={schoolAffiliation}
                    onChange={(e) => setSchoolAffiliation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Message</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Write your message to blood donors and patients..."
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md shadow-rose-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Post to Gratitude Wall</span>
                </button>

                {submittedSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Thank you! Your note has been pinned to the donor wall.
                  </div>
                )}
              </form>
            </div>

            {/* Right: Wall of Notes */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="space-y-3.5 max-h-[460px] overflow-y-auto pr-1">
                {gratitudeNotes.map((note, index) => (
                  <div key={index} className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-2xs">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-bold">
                          {note.name.charAt(0)}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-gray-900 block leading-tight">{note.name}</span>
                          {note.school && (
                            <span className="text-[10px] text-gray-500">{note.school}</span>
                          )}
                        </div>
                      </div>
                      <span className="text-[10px] font-medium text-gray-400">{note.date}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                      "{note.message}"
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200 text-xs text-gray-500 flex items-center justify-between">
                <span>Join {gratitudeNotes.length}+ messages of inspiration</span>
                <span className="text-rose-600 font-bold">#VitalFlowGratitude</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
