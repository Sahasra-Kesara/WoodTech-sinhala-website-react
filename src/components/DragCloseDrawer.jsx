import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

export const DragCloseDrawerExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid place-content-center mt-4">
      <button
        onClick={() => setOpen(true)}
        className="font-maname rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600 mb-8"
      >
        වැඩි විස්තර...
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400 text-justify">
          <h2 className="text-4xl font-bold text-neutral-200 font-maname">
            WoodTech වෙත සාදරයෙන් පිළිගනිමු
          </h2>
          <p className="text-lg text-neutral-300 font-maname">
            ඔබේ නිවස සඳහා ගුණාත්මක ලී විසඳුම් නිර්මාණය කිරීම
          </p>
          <p className="font-maname">
            WoodTech දී, අපි විශිෂ්ට ලී නිෂ්පාදන නිර්මාණය අපගේ විශේෂඥ මත ආඩම්බර 
            ඔබේ අද්විතීය අවශ් යතා අනුව සකස් කර ඇත. වඩු කර්මාන්තයේ වසර ගණනාවක අත්දැකීම් සහිතව, අපගේ 
            දක්ෂ ශිල්පීන් ඉහළ පෙළේ ගුණාත්මක භාවය සහ සුවිශේෂී සේවාවක් ලබා දීම සඳහා කැපවී සිටිති.
          </p>

          <h3 className="text-2xl font-bold text-neutral-200 font-maname">අපගේ නිෂ්පාදන</h3>

          <h4 className="text-xl font-semibold text-neutral-200 font-maname">1. ලී දොරවල්</h4>
          <p className="font-maname">
            අපගේ විශ්මය ජනක ලී දොරවල් සමඟ ඔබේ පිවිසුම පරිවර්තනය කරන්න, විශිෂ්ටතම ද්රව්ය වලින් සකස් කර ඇත. 
            ඔබ සම්භාව්ය මෝස්තර හෝ සමකාලීන මෝස්තර වලට කැමති වුවත්, අපි පුළුල් පරාසයක විකල්ප ලබා දෙන්නෙමු 
            ඔබේ රුචිකත්වයට සරිලන පරිදි. අපගේ දොරවල් සෞන්දර්යාත්මකව ප්රසන්න වනවා පමණක් නොව, පවතින පරිදි ඉදිකර ඇත, 
            ඔබේ නිවස සුරක්ෂිතව හා ආරාධනාත්මකව පවතින බව සහතික කිරීම.
          </p>

          <h4 className="text-xl font-semibold text-neutral-200 font-maname">2. දොර කවුළු</h4>
          <p className="font-maname">
            අපගේ අලංකාර ලෙස නිර්මාණය කරන ලද දොර කවුළු සමඟ ඔබේ ජීවන අවකාශය වැඩි දියුණු කරන්න. එකතු කිරීම සඳහා පරිපූර්ණයි 
            පෞද්ගලිකත්වය පවත්වා ගනිමින් ස්වාභාවික ආලෝකය, අපගේ දොර ජනෙල් විවිධ මෝස්තර සහ නිමාවකින් පැමිණේ, 
            ඕනෑම වාස්තු විද්යාත්මක ශෛලියකට අනුපූරක වේ. ඔබේ අභ්යන්තරය විලාසිතාවෙන් තබා ගනිමින් හිරු එළිය ට ඉඩ දෙන්න!
          </p>

          <h4 className="text-xl font-semibold text-neutral-200 font-maname">3. පැන්ට්රි කබඩ්</h4>
          <p className="font-maname">
            අපගේ අභිරුචි පැන්ට්රි කබඩ් සමඟ ඔබේ මුළුතැන්ගෙයි අවකාශය උපරිම කරන්න. ක්රියාකාරීත්වය සහ යන දෙකම සඳහා නිර්මාණය කර ඇත 
            අලංකාරය, අපගේ අල්මාරි ඔබේ නිශ්චිත අවශ්යතාවන්ට ගැලපෙන පරිදි සාදා ඇත. විවිධ ෂෙල්වින් විකල්ප සමඟ 
            සහ අවසන්, අපගේ පැන්ට්රි කබඩ් පන්තියේ ස්පර්ශයක් එකතු කරන අතරතුර ඔබේ මුළුතැන්ගෙය සංවිධානය කිරීම සඳහා පරිපූර්ණයි.
          </p>

          <h4 className="text-xl font-semibold text-neutral-200 font-maname">4. ජනේල</h4>
          <p className="font-maname">
            අපගේ ලී කවුළු සමඟ අලංකාරය හා කල්පැවැත්ම පිළිබඳ පරිපූර්ණ මිශ්රණයක් අත්විඳින්න. අපේ ජනෙල් තමයි 
            ඔබේ නිවසේ චමත්කාරය වැඩි දියුණු කරන අතරම විශිෂ්ට පරිවාරකයක් ලබා දීම සඳහා නිර්මාණය කර ඇත. වෙතින් තෝරන්න 
            පරිපූර්ණ ගැලපීම සොයා ගැනීම සඳහා කේස්මන්ට්, ද්විත්ව එල්ලා සහ ලිස්සා යන කවුළු ඇතුළු විවිධ මෝස්තර 
            ඔබේ අවකාශය සඳහා.
          </p>

          <h4 className="text-xl font-semibold text-neutral-200 font-maname">5. වෙනත් ගෘහ භාණ්ඩ</h4>
          <p className=" font-maname">
            වුඩ්ටෙක් හි, සෑම විස්තරයක්ම වැදගත් බව අපට වැටහේ. ඒ නිසා අපි වෙනත් ගෘහ භාණ්ඩ රාශියක් ඉදිරිපත් කරමු 
            අභිරුචි ගෘහ භාණ්ඩ, ෂෙල්වින් ඒකක සහ සැරසිලි උච්චාරණ ඇතුළු විකල්ප. අපි ඔබට නිර්මාණය කිරීමට උදව් කරමු 
            ඔබේ නිවසේ සුසංයෝගී හා ආරාධනා කරන වාතාවරණය.
          </p>

          <h3 className="text-2xl font-bold text-neutral-200 font-maname">ඇයි අපිව තෝරන්නේ?</h3>
          <ul className="list-disc list-inside space-y-2 list-outside font-maname">
            <li><strong>ප්රවීණ ශිල්පීය කුසලතා:</strong> අපගේ කණ්ඩායම ඔවුන්ගේ වැඩ කටයුතු ගැන උනන්දුවක් දක්වන සහ විශිෂ්ටත්වය ලබා දීමට කැපවී සිටින ඉතා දක්ෂ වඩු කාර්මිකයන්ගෙන් සමන්විත වේ.</li>
            <li><strong>තත්ත්ව ද්රව්ය:</strong> අප නිර්මාණය කරන සෑම නිෂ්පාදනයකම කල්පැවැත්ම සහ සෞන්දර්යාත්මක ආයාචනය සහතික කිරීම සඳහා අපි හොඳම ද්රව්ය පමණක් ලබා ගනිමු.</li>
            <li><strong>අභිරුචිකරණය:</strong> අපි පුද්ගලාරෝපිත සේවය විශ්වාස කරනවා. ඔබේ විශේෂිත අවශ්යතා සහ මනාපයන් සපුරාලන නිෂ්පාදන සැලසුම් කිරීම සහ යාත්රා කිරීම සඳහා අපගේ කණ්ඩායම ඔබ සමඟ සමීපව කටයුතු කරනු ඇත.</li>
            <li><strong>පාරිභෝගික තෘප්තිය:</strong> ඔබේ තෘප්තිය තමයි අපේ ප් රමුඛතාවය. ගුණාත්මක වැඩ සහ සුවිශේෂී සේවාවක් තුළින් ඔබේ අපේක්ෂාවන් ඉක්මවා යාමට අපි උත්සාහ කරමු.</li>
          </ul>

          <h3 className="text-2xl font-bold text-neutral-200 font-maname">සම්බන්ධ වන්න</h3>
          <p className=" font-maname">
            ඔබේ වඩු සිහින වලට ජීවය ලබා දීමට සූදානම්ද? උපදේශනය සඳහා අදම අප අමතන්න සහ අපගේ කණ්ඩායමඔබේ නිවස සඳහා ලස්සන ලී විසඳුම් නිර්මාණය කිරීමට ඔබට උදව් කරන්න.
          </p>
          <p className=" font-maname">දුරකථන: +(94) 72 967 7030</p>
          <p className=" font-maname">Email: sahasrakesara@gmail.com</p>
          <p className=" font-maname">Website: woodtech.lk</p>
          <p className=" font-maname">අපගේ නවතම ව්යාපෘති පිළිබඳ ආශ්වාදය සහ යාවත්කාලීන කිරීම් සඳහා ෆේස්බුක් / @woodtech හි අපව අනුගමනය කරන්න!</p>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
