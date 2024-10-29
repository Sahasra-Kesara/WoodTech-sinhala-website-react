import React from 'react';
import { DragCloseDrawerExample } from '../components/DragCloseDrawer';

const About = () => {
  return (
    <section className="white mt-10">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-maname">අප ගැන</h2>
            <p className="mt-4 text-gray-600 text-lg text-justify font-maname">
              WoodTech වෙත සාදරයෙන් පිළිගනිමු, එහිදී අපි ඔබේ නිවස සඳහා ගුණාත්මක ලී විසඳුම් නිර්මාණය කිරීම සඳහා විශේෂිත වෙමු. අපගේ දක්ෂ ශිල්පීන් ඔබේ අද්විතීය අවශ්යතාවන්ට ගැලපෙන පරිදි ලී දොරවල්, දොර ජනෙල්, පැන්ට්රි කබඩ් සහ විවිධ ගෘහ භාණ්ඩ ඇතුළු විශිෂ්ට නිෂ්පාදන නිර්මාණය කරයි. සෑම ව්යාපෘතියක්ම ඔබේ අපේක්ෂාවන් ඉක්මවා යන බව සහතික කරමින් අපි විශේෂඥ ශිල්පීය කුසලතා, ගුණාත්මක ද්රව්ය සහ පාරිභෝගික තෘප්තියට ප්රමුඛත්වය දෙමු. ඔබේ අවකාශය පරිවර්තනය කිරීමට සූදානම්ද? +(94) 72 967 7030 හෝ sahasrakesara@gmail.com හි අප අමතන්න, සහ ආශ්වාදය සහ යාවත්කාලීන කිරීම් සඳහා woodtech.lk හි අපගේ වෙබ් අඩවියට පිවිසෙන්න!
            </p>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.pexels.com/photos/265004/pexels-photo-265004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Beautiful landscape" // Updated alt text to be descriptive without redundant words
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <DragCloseDrawerExample/>
    </section>
  );
}

export default About;
