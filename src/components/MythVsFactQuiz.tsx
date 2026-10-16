import { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/campaignData';

export default function MythVsFactQuiz() {
  const [answers, setAnswers] = useState<Record<string, 'myth' | 'fact'>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [quizMode, setQuizMode] = useState<'step' | 'all'>('step');

  const currentQ = QUIZ_QUESTIONS[activeQuestionIndex];

  const handleSelectAnswer = (qId: string, selection: 'myth' | 'fact') => {
    setAnswers((prev) => ({ ...prev, [qId]: selection }));
    setRevealed((prev) => ({ ...prev, [qId]: true }));
  };

  const handleReset = () => {
    setAnswers({});
    setRevealed({});
    setActiveQuestionIndex(0);
  };

  // Calculate score
  const totalAnswered = Object.keys(answers).length;
  const correctCount = Object.entries(answers).filter(([qId, ans]) => {
    const q = QUIZ_QUESTIONS.find(item => item.id === qId);
    return q && q.correctAnswer === ans;
  }).length;

  const isAllCompleted = totalAnswered === QUIZ_QUESTIONS.length;

  return (
    <section id="quiz" className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            Part 2: Interactive Student Challenge
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            The “Myth or Fact?” Blood Donation Quiz
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-2 leading-relaxed">
            Misconceptions and outdated rumors prevent thousands of university students and young adults across Egypt from donating. Test your knowledge against current Egyptian Ministry of Health and WHO guidelines.
          </p>

          {/* Progress / Score Banner */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <div className="bg-gray-100 px-4 py-2 rounded-xl font-semibold text-gray-700">
              Answered: <span className="font-bold text-gray-900">{totalAnswered} / {QUIZ_QUESTIONS.length}</span>
            </div>
            <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-xl font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Score: {correctCount} Correct
            </div>
            {totalAnswered > 0 && (
              <button
                onClick={handleReset}
                className="text-gray-500 hover:text-rose-600 text-xs font-semibold flex items-center gap-1 cursor-pointer underline underline-offset-4"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Quiz
              </button>
            )}
          </div>
        </div>

        {/* Stepper View */}
        <div className="bg-stone-50 rounded-3xl border border-gray-200/90 p-6 sm:p-10 shadow-sm">
          {/* Question Stepper Indicator */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-100 px-2.5 py-1 rounded-lg">
                Question {activeQuestionIndex + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <span className="text-xs font-medium text-gray-500 hidden sm:inline">
                {currentQ.officialGuidance}
              </span>
            </div>

            {/* Quick Question Selector dots */}
            <div className="flex items-center gap-1.5">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const isAns = !!answers[q.id];
                const isCorrect = isAns && answers[q.id] === q.correctAnswer;
                return (
                  <button
                    key={q.id}
                    onClick={() => setActiveQuestionIndex(idx)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                      activeQuestionIndex === idx
                        ? 'ring-2 ring-rose-600 bg-rose-600 text-white'
                        : isAns
                        ? isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                        : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question Statement */}
          <div className="mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Statement:</div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug">
              “{currentQ.question}”
            </h3>
          </div>

          {/* Choices: Myth or Fact buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => handleSelectAnswer(currentQ.id, 'myth')}
              className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between group ${
                answers[currentQ.id] === 'myth'
                  ? currentQ.correctAnswer === 'myth'
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20'
                    : 'border-red-500 bg-red-50 text-red-950 ring-2 ring-red-500/20'
                  : revealed[currentQ.id] && currentQ.correctAnswer === 'myth'
                  ? 'border-emerald-300 bg-emerald-50/50'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Option A</div>
                <div className="text-xl font-black">❌ It's a MYTH</div>
                <div className="text-xs text-gray-500 mt-1">This statement is untrue or outdated.</div>
              </div>
              {revealed[currentQ.id] && currentQ.correctAnswer === 'myth' && (
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                  ✓
                </div>
              )}
            </button>

            <button
              onClick={() => handleSelectAnswer(currentQ.id, 'fact')}
              className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer flex items-center justify-between group ${
                answers[currentQ.id] === 'fact'
                  ? currentQ.correctAnswer === 'fact'
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20'
                    : 'border-red-500 bg-red-50 text-red-950 ring-2 ring-red-500/20'
                  : revealed[currentQ.id] && currentQ.correctAnswer === 'fact'
                  ? 'border-emerald-300 bg-emerald-50/50'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Option B</div>
                <div className="text-xl font-black">✅ It's a FACT</div>
                <div className="text-xs text-gray-500 mt-1">This statement is medically verified.</div>
              </div>
              {revealed[currentQ.id] && currentQ.correctAnswer === 'fact' && (
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                  ✓
                </div>
              )}
            </button>
          </div>

          {/* Explanation Box Revealed */}
          {revealed[currentQ.id] && (
            <div className={`p-6 sm:p-7 rounded-2xl border transition-all animate-in fade-in zoom-in-95 duration-300 ${
              answers[currentQ.id] === currentQ.correctAnswer
                ? 'bg-emerald-50/80 border-emerald-200'
                : 'bg-rose-50/80 border-rose-200'
            }`}>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  {answers[currentQ.id] === currentQ.correctAnswer ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black">
                      <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-black">
                      <XCircle className="w-4 h-4" /> Actually, that's a {currentQ.correctAnswer.toUpperCase()}!
                    </span>
                  )}
                  <span className="text-xs font-bold text-gray-700">
                    Verified by: {currentQ.sourceAuthority}
                  </span>
                </div>
              </div>

              {/* Core explanation */}
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium">
                {currentQ.explanation}
              </p>

              {/* Key Takeaway box */}
              <div className="mt-4 p-3.5 rounded-xl bg-white border border-gray-200/80 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm font-bold text-gray-900">
                  <span className="text-rose-600 uppercase tracking-wider mr-1.5">Key Takeaway:</span>
                  {currentQ.keyTakeaway}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between pt-6 border-t border-gray-200">
            <button
              disabled={activeQuestionIndex === 0}
              onClick={() => setActiveQuestionIndex(prev => Math.max(0, prev - 1))}
              className="text-xs sm:text-sm font-bold text-gray-600 hover:text-gray-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              ← Previous Question
            </button>

            {activeQuestionIndex < QUIZ_QUESTIONS.length - 1 ? (
              <button
                onClick={() => setActiveQuestionIndex(prev => Math.min(QUIZ_QUESTIONS.length - 1, prev + 1))}
                className="px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <a
                href="#journey"
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2"
              >
                <span>Explore The Blood Journey</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Completion Milestone Card */}
        {isAllCompleted && (
          <div className="mt-8 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl text-center animate-in zoom-in-95 duration-500">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xs mx-auto flex items-center justify-center mb-4">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              Quiz Completed: {correctCount} / {QUIZ_QUESTIONS.length} Correct!
            </h3>
            <p className="text-sm sm:text-base text-emerald-100 max-w-xl mx-auto mt-2">
              You now know more than 90% of the general public about blood safety, shelf lives, and patient needs. Share this knowledge to inspire friends!
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#share"
                className="px-5 py-2.5 rounded-xl bg-white text-emerald-900 font-bold text-sm shadow-md hover:bg-emerald-50 transition-colors"
              >
                Create Shareable Awareness Card
              </a>
              <a
                href="#centers"
                className="px-5 py-2.5 rounded-xl bg-emerald-900/40 border border-white/30 text-white font-bold text-sm hover:bg-emerald-900/60 transition-colors"
              >
                Find Local Blood Drives
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
