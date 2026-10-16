import { useState, useRef, useEffect } from 'react';
import { 
  Share2, 
  Download, 
  Copy, 
  Check, 
  Sparkles, 
  Heart, 
  Droplet, 
  MessageCircle, 
  Smartphone, 
  Square, 
  Layers
} from 'lucide-react';
import { CARD_SLOGANS } from '../data/campaignData';

interface ShareableCardSectionProps {
  initialCampaignName?: string;
}

export default function ShareableCardSection({ initialCampaignName = 'VitalFlow Campus Blood Drive' }: ShareableCardSectionProps) {
  const [campaignName, setCampaignName] = useState(initialCampaignName);
  const [selectedSlogan, setSelectedSlogan] = useState(CARD_SLOGANS[0].text);
  const [studentPledgeName, setStudentPledgeName] = useState('Proud Student Donor');
  const [showPledgeBadge, setShowPledgeBadge] = useState(true);
  const [cardFormat, setCardFormat] = useState<'story' | 'square'>('story'); // 9:16 vs 1:1
  const [theme, setTheme] = useState<'crimson' | 'midnight' | 'sunset' | 'royal'>('crimson');
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Draw card on HTML5 Canvas whenever state changes
  useEffect(() => {
    drawCardToCanvas();
  }, [campaignName, selectedSlogan, studentPledgeName, showPledgeBadge, cardFormat, theme]);

  const getThemeColors = () => {
    switch (theme) {
      case 'midnight':
        return {
          bg1: '#09090b',
          bg2: '#18181b',
          accent: '#ef4444',
          accentLight: '#fca5a5',
          text: '#ffffff',
          subtext: '#a1a1aa'
        };
      case 'sunset':
        return {
          bg1: '#4c0519',
          bg2: '#881337',
          accent: '#fbbf24',
          accentLight: '#fde68a',
          text: '#ffffff',
          subtext: '#fecdd3'
        };
      case 'royal':
        return {
          bg1: '#1e1b4b',
          bg2: '#312e81',
          accent: '#f43f5e',
          accentLight: '#fda4af',
          text: '#ffffff',
          subtext: '#c7d2fe'
        };
      case 'crimson':
      default:
        return {
          bg1: '#881337',
          bg2: '#9f1239',
          accent: '#ffffff',
          accentLight: '#ffe4e6',
          text: '#ffffff',
          subtext: '#fecdd3'
        };
    }
  };

  const drawCardToCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Dimensions
    const width = cardFormat === 'story' ? 1080 : 1080;
    const height = cardFormat === 'story' ? 1920 : 1080;

    canvas.width = width;
    canvas.height = height;

    const colors = getThemeColors();

    // 1. Background Gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, colors.bg1);
    gradient.addColorStop(1, colors.bg2);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Decorative circle glows
    ctx.save();
    ctx.beginPath();
    ctx.arc(width * 0.85, height * 0.15, 300, 0, Math.PI * 2);
    ctx.fillStyle = colors.accent;
    ctx.globalAlpha = 0.08;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width * 0.15, height * 0.85, 350, 0, Math.PI * 2);
    ctx.fillStyle = colors.accent;
    ctx.globalAlpha = 0.06;
    ctx.fill();
    ctx.restore();

    // Decorative border frame
    ctx.save();
    ctx.strokeStyle = colors.accent;
    ctx.globalAlpha = 0.25;
    ctx.lineWidth = 4;
    ctx.strokeRect(40, 40, width - 80, height - 80);
    ctx.restore();

    // 2. Top Header - Campaign Name & Droplet Logo
    ctx.save();
    // Drop icon circle
    const logoY = cardFormat === 'story' ? 160 : 120;
    ctx.fillStyle = colors.accent;
    ctx.beginPath();
    ctx.arc(width / 2, logoY, 44, 0, Math.PI * 2);
    ctx.fill();

    // Heart icon inside logo
    ctx.fillStyle = colors.bg1;
    ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('♥', width / 2, logoY);

    // Campaign Name
    ctx.fillStyle = colors.text;
    ctx.font = '800 42px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    const cleanCamp = (campaignName || 'VitalFlow Blood Drive').toUpperCase();
    ctx.fillText(cleanCamp, width / 2, logoY + 90);

    // Subtag
    ctx.fillStyle = colors.subtext;
    ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('BLOOD DONATION AWARENESS CAMPAIGN', width / 2, logoY + 135);
    ctx.restore();

    // 3. Middle Slogan (The Hero Hook)
    ctx.save();
    const sloganY = cardFormat === 'story' ? height * 0.44 : height * 0.46;
    ctx.fillStyle = colors.text;
    ctx.font = '900 64px "Outfit", "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';

    // Wrap slogan text
    const words = selectedSlogan.split(' ');
    let line = '';
    const lines = [];
    const maxTextWidth = width - 160;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxTextWidth && n > 0) {
        lines.push(line);
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line);

    const startY = sloganY - (lines.length * 40);
    lines.forEach((l, index) => {
      ctx.fillText(l.trim(), width / 2, startY + (index * 80));
    });
    ctx.restore();

    // 4. Impact Fact Pill Box
    ctx.save();
    const factBoxY = cardFormat === 'story' ? height * 0.64 : height * 0.68;
    const boxWidth = width - 200;
    const boxHeight = cardFormat === 'story' ? 240 : 160;
    const boxX = (width - boxWidth) / 2;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.beginPath();
    ctx.roundRect(boxX, factBoxY, boxWidth, boxHeight, 28);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Fact stats inside box
    ctx.textAlign = 'center';
    ctx.fillStyle = colors.accentLight;
    ctx.font = '800 32px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('DID YOU KNOW?', width / 2, factBoxY + 50);

    ctx.fillStyle = '#ffffff';
    ctx.font = '600 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('1 Pint of Blood = Up to 3 Lives Saved', width / 2, factBoxY + 105);

    if (cardFormat === 'story') {
      ctx.fillStyle = colors.subtext;
      ctx.font = '500 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Platelets expire in only 5-7 days.', width / 2, factBoxY + 155);
      ctx.fillText('Hospitals need donors every single day.', width / 2, factBoxY + 195);
    }
    ctx.restore();

    // 5. Student Pledge Badge (if toggled)
    if (showPledgeBadge) {
      ctx.save();
      const pledgeY = cardFormat === 'story' ? height * 0.81 : height * 0.87;
      ctx.fillStyle = colors.accent;
      ctx.beginPath();
      ctx.roundRect(width / 2 - 280, pledgeY, 560, 64, 32);
      ctx.fill();

      ctx.fillStyle = colors.bg1;
      ctx.font = '800 24px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const pledgeText = `✓ PLEDGED BY: ${(studentPledgeName || 'STUDENT ADVOCATE').toUpperCase()}`;
      ctx.fillText(pledgeText, width / 2, pledgeY + 32);
      ctx.restore();
    }

    // 6. Bottom Call to Action & Hashtag
    ctx.save();
    const bottomY = height - 100;
    ctx.textAlign = 'center';
    ctx.fillStyle = colors.subtext;
    ctx.font = '700 26px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Scan or Visit to Learn & Book at Local Egypt Centers', width / 2, bottomY - 35);

    ctx.fillStyle = colors.text;
    ctx.font = '800 30px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('#اتبرع_بالدم_مصر • #VitalFlowEgypt', width / 2, bottomY + 10);
    ctx.restore();
  };

  const handleDownloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setDownloading(true);
    try {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `blood-awareness-egypt-${cardFormat}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => setDownloading(false), 800);
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `🩸 "${selectedSlogan}"\n\nهل تعلم أن مستشفيات مصر تحتاج أكثر من ١.٨ مليون كيس دم سنوياً، وأن الدم لا يُصنع في أي معمل؟ الأطفال المصابين بأنيميا البحر المتوسط ومرضى السرطان في ٥٧٣٥٧ ومعهد الأورام يعتمدون على تبرعنا!\n\nتعرف على أقرب مركز تبرع في محافظتك: ${window.location.origin}\n\n#اتبرع_بالدم_مصر #VitalFlowEgypt`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyCaption = () => {
    const caption = `🩸 "${selectedSlogan}"\n\nالدم لا يُصنع في أي مصنع! أكثر من ١٠,٠٠٠ طفل في مصر مصاب بأنيميا البحر المتوسط (Thalassemia) يحتاجون نقل دم شهرياً، بجانب أطفال مستشفى ٥٧٣٥٧ ومصابي طوارئ الحوادث.\n\nاعرف أقرب مركز تبرع بالدم في محافظتك واختبر معلوماتك: ${window.location.origin}\n\n#اتبرع_بالدم_مصر #VitalFlowEgypt #انقذ_حياة #التبرع_بالدم #مصر`;
    navigator.clipboard.writeText(caption);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 3000);
  };

  const handleNativeShare = async () => {
    const canvas = canvasRef.current;
    if (navigator.share && canvas) {
      try {
        canvas.toBlob(async (blob) => {
          if (!blob) return;
          const file = new File([blob], 'blood-donation-awareness.png', { type: 'image/png' });
          await navigator.share({
            title: campaignName,
            text: `🩸 ${selectedSlogan} Blood cannot be manufactured. Only you can give it!`,
            files: [file]
          });
        });
      } catch (err) {
        // Fallback to text share
        navigator.share?.({
          title: campaignName,
          text: `🩸 ${selectedSlogan} #GiveBloodSaveLives`,
          url: window.location.href
        });
      }
    } else {
      handleWhatsAppShare();
    }
  };

  return (
    <section id="share" className="py-20 bg-stone-50 border-t border-b border-rose-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Share2 className="w-3.5 h-3.5 text-rose-600" />
            Part 5: Spread the Word
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Shareable Awareness Graphic Generator
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-2 leading-relaxed">
            Ready-made for your Instagram Stories, WhatsApp Status, or campus group chats. Customize with your campaign name, pick a slogan, and download high-resolution graphics in one click.
          </p>
        </div>

        {/* Generator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Customizer Controls */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                Card Customizer
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCardFormat('story')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                    cardFormat === 'story'
                      ? 'bg-rose-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Story (9:16)</span>
                </button>
                <button
                  onClick={() => setCardFormat('square')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
                    cardFormat === 'square'
                      ? 'bg-rose-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Square className="w-3.5 h-3.5" />
                  <span>Square (1:1)</span>
                </button>
              </div>
            </div>

            {/* Campaign Name */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">
                Campaign / University / Group Name
              </label>
              <input
                type="text"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                placeholder="e.g. Oakridge Blood Awareness 2026"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-rose-500"
              />
            </div>

            {/* Slogan Picker */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">
                Choose Key Message / Slogan
              </label>
              <div className="space-y-2">
                {CARD_SLOGANS.map((slogan) => (
                  <button
                    key={slogan.id}
                    onClick={() => setSelectedSlogan(slogan.text)}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-between ${
                      selectedSlogan === slogan.text
                        ? 'border-rose-600 bg-rose-50 text-rose-950 ring-1 ring-rose-500'
                        : 'border-gray-200 bg-stone-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span>“{slogan.text}”</span>
                    <span className="text-[10px] text-gray-400 font-medium ml-2 shrink-0">{slogan.category}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Colors */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                Color Palette Theme
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: 'crimson', label: 'Crimson', color: 'bg-rose-800' },
                  { id: 'midnight', label: 'Midnight', color: 'bg-zinc-900' },
                  { id: 'sunset', label: 'Sunset', color: 'bg-amber-900' },
                  { id: 'royal', label: 'Royal', color: 'bg-indigo-950' },
                ].map((th) => (
                  <button
                    key={th.id}
                    onClick={() => setTheme(th.id as any)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      theme === th.id ? 'border-rose-600 ring-2 ring-rose-500/20 bg-rose-50/50' : 'border-gray-200'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full mx-auto mb-1 ${th.color}`} />
                    <span className="text-[11px] font-bold text-gray-700">{th.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Student Pledge Badge Toggle */}
            <div className="pt-2 border-t border-gray-100 space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showPledgeBadge}
                  onChange={(e) => setShowPledgeBadge(e.target.checked)}
                  className="w-4 h-4 text-rose-600 rounded-sm border-gray-300 focus:ring-rose-500"
                />
                <span className="text-xs font-bold text-gray-700">Include "I Pledged to Donate" Student Badge</span>
              </label>

              {showPledgeBadge && (
                <input
                  type="text"
                  value={studentPledgeName}
                  onChange={(e) => setStudentPledgeName(e.target.value)}
                  placeholder="Your Name or 'Student Donor'"
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-xs font-semibold text-gray-800"
                />
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownloadPNG}
                disabled={downloading}
                className="flex-1 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md shadow-rose-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{downloading ? 'Rendering Image...' : 'Download PNG Card'}</span>
              </button>

              <button
                onClick={handleWhatsAppShare}
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={handleCopyCaption}
                className="py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                title="Copy ready-to-post Instagram caption"
              >
                {copiedCaption ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-gray-600" />}
                <span>{copiedCaption ? 'Copied!' : 'Copy Caption'}</span>
              </button>
            </div>
          </div>

          {/* Right: Live Graphic Preview */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>Live Graphic Preview ({cardFormat === 'story' ? '9:16 Story' : '1:1 Square'})</span>
            </div>

            {/* Mobile frame wrapper for preview */}
            <div className="bg-gray-900 p-3 sm:p-4 rounded-3xl shadow-2xl border-4 border-gray-800 max-w-sm w-full mx-auto overflow-hidden">
              <div className="w-full relative overflow-hidden rounded-2xl bg-black flex items-center justify-center">
                <canvas
                  ref={canvasRef}
                  className="w-full h-auto object-contain rounded-2xl shadow-inner"
                  style={{ maxHeight: cardFormat === 'story' ? '560px' : '360px' }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400 px-1 font-semibold">
                <span>1080 × {cardFormat === 'story' ? '1920px (Full HD)' : '1080px (Square)'}</span>
                <span className="text-rose-400">Crisp Export Ready</span>
              </div>
            </div>

            {/* Quick Share Tip */}
            <div className="mt-6 text-center max-w-md">
              <p className="text-xs text-gray-500 leading-relaxed">
                Tip: Post this to your Instagram Story or college WhatsApp group with a link to your local campus blood drive. One share often mobilizes 2 to 4 first-time donors!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
