import React, { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "වුඩ්ටෙක් ලබා දෙන සේවාවන් මොනවාද?",
      answer: "WoodTech අභිරුචි දැව වැඩ, කැබිනට්, ගෘහ භාණ්ඩ නිර්මාණය, සහ ප්රතිසංස්කරණය සේවා විශේෂඥ. අපි සියලු අභිරුචි දැව ව්යාපෘති සඳහා වෘත්තීය නිමාව සහ ස්ථාපනය ද ලබා දෙන්නෙමු."
    },
    {
      question: "මට අභිරුචි දැව වැඩ කිරීමේ ව්යාපෘතියක් ඉල්ලා සිටිය හැක්කේ කෙසේද?",
      answer: "ඔබගේ අවශ්යතා සාකච්ඡා කිරීම සඳහා අපගේ සම්බන්ධතා පිටුව හරහා ඔබට අප වෙත ළඟා විය හැකිය, නැතහොත් අපගේ නිර්මාණ විශේෂ ists යෙකු සමඟ කතා කිරීමට කෙලින්ම අප අමතන්න."
    },
    {
      question: "ව්යාපෘතියක් සඳහා සාමාන්ය පෙරළීමේ කාලය කොපමණද?",
      answer: "ව්යාපෘතියේ විෂය පථය අනුව කාලරාමුව වෙනස් වේ. කුඩා ව්යාපෘති සඳහා දින කිහිපයක් ගත විය හැකි අතර විශාල අභිරුචි ගොඩනැගීම් සති කිහිපයක් ගත විය හැකිය. ව්යාපෘති විස්තර සමාලෝචනය කිරීමෙන් පසු ඇස්තමේන්තුගත කාලරාමුවක් ලබා දීමට අපි කටයුතු කරමු."
    },
    {
      question: "WoodTech බෙදා හැරීම සහ ස්ථාපනය ලබා දෙනවාද?",
      answer: "ඔව්, ඔබේ අයිතම පරිපූර්ණලෙස සකසා ඇති බව සහතික කිරීම සඳහා අපගේ සියලුම අභිරුචි දැව වැඩ කිරීමේ ව්යාපෘති සඳහා බෙදාහැරීමේ සහ වෘත්තීය ස්ථාපන සේවා අපි ලබා දෙන්නෙමු."
    },
    {
      question: "ඔබ භාවිතා කරන ද්රව්ය මොනවාද?",
      answer: "ඉල්ලීම මත නැවත ලබාගත් දැව සඳහා විකල්ප ඇතුළුව අපගේ ව්යාපෘති සඳහා උසස් තත්ත්වයේ දැව සහ පරිසර හිතකාමී ද්රව්ය අපි ප්රභවය කරමු. ඔබේ ව්යාපෘතියේ අවශ්යතා මත පදනම්ව හොඳම ද්රව්ය තෝරා ගැනීම තුළින් අපගේ කණ්ඩායම ඔබට මග පෙන්වනු ඇත."
    }
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-maname">නිතර අසනු ලබන ප්‍රශ්න</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 bg-white"
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-700 font-maname">
                {faq.question}
              </h3>
              <span className="text-gray-500 font-maname">
                {open === index ? '-' : '+'}
              </span>
            </div>
            {open === index && (
              <p className="text-gray-600 mt-2 font-maname">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
