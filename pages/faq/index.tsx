// import React from 'react';
// import styles from './styles.module.css'
// const Faq = () => {
//     return (
//         <div className='lg:px-28 px-6 '>
//             <h1 className={`py-16 font-bold text-4xl text-black ${styles.bg}`}>FAQ</h1>
//             <div className='lg:flex gap-8'>
//                 <div className='lg:w-1/4 pt-8 sticky'>
//                     <h1 className='w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md   border-[1px] hover:font-bold border-gray-300'>Holiday</h1>
//                     <h1 className='w-full  px-4 py-2 hover:text-white hover:bg-blue-500 rounded-md text-black font-semibold border-[1px] my-1 hover:font-bold border-gray-300'>Hotel</h1>
//                     <h1 className='w-full px-4 py-2 hover:text-white hover:bg-blue-500 rounded-md text-black font-semibold border-[1px] hover:font-bold border-gray-300'>Flight</h1>
//                     <h1 className='w-full px-4 py-2 hover:text-white hover:bg-blue-500 rounded-md text-black font-semibold border-[1px] hover:font-bold my-1 border-gray-300'>Visa</h1>
//                 </div>

//                 <div className=' bg-white lg:w-3/4 text-black'>
//                     <p className='py-8 text-[18px] '>We have put together some of the most common questions that we get asked a lot. Please check through the categories to get your answer without any delay.</p>

//                     <h1 className='font-semibold text-4xl '>Flight</h1>
//                     <div className='py-6'>
//                         <h2 className='font-semibold text-xl'>Q: I have a debit card. May I use my debit card to book a flight from Sharetrip?</h2>
//                         <h1 className='text-[18px]'> A: Yes, you can easily book a flight with any local or international card, debit or even your credit card.</h1>
//                     </div>


//                     <div>
//                         <h1 className='text-xl font-semibold'> প্রশ্ন: আমার ডেবিট কার্ড আছে। আমি কি ডেবিট কার্ড ব্যবহার করে শেয়ারট্রিপ থেকে ফ্লাইট বুক করতে পারবো?</h1>
//                         <h1 className='text-[18px]'> উত্তর: হ্যাঁ, আপনি আপনার লোকাল কিংবা ইন্টার্ন্যাশনাল কার্ড, ডেবিট অথবা ক্রেডিট কার্ডও ব্যবহার করে শেয়ারট্রি থেকে খুব সহজেই ফ্লাইট বুক করত পারবেন</h1>
//                     </div>



//                     <div className='py-8'>
//                         <h4 className='text-xl font-semibold'> Q. Can you book a domestic flight on Sharetrip?</h4>
//                         <h3 className='text-[18px]'> A: Yes, we provide both domestic and international flight services. Please let us know your travel plan to assist you in finding the preferred flight.</h3>
//                     </div>



//                     <div>
//                         <h1 className='text-xl font-semibold'>প্রশ্ন: আমি কি শেয়ারট্রিপ থেকে ডোমেস্টিক ফ্লাইট বুক করতে পারবো?</h1>
//                         <h1 className='text-[18px]'>  <span className='font-semibold'> উত্তর:</span> হ্যাঁ, পারবেন। আমরা ডোমেস্টিক এবং ইন্টারন্যাশনাল, উভয় ধরণের ফ্লাইট সার্ভিস দিয়ে থাকি। আমরা আপনাকে আপনার ভ্রমণ পরিকল্পনা অনুযায়ী পছন্দের ফ্লাইট বেছে নিতে সাহায্য করতে পারি।</h1>
//                     </div>



//                     <div className='py-8'>
//                         <h1 className='text-xl font-semibold'> Q: Can I make the payment later for an online booking on Sharetrip?</h1>
//                         <h1 className='text-[18px]'><span className='text-xl font-semibold'> A:</span>Unfortunately, you cannot hold the booking unless you pay. You instantly need to pay the amount to confirm your purchase made online.</h1>
//                     </div>




//                     <div className=''>
//                         <h1 className='text-xl font-semibold'> প্রশ্ন: অনলাইন বুকিং-এর ক্ষেত্রে আমি কি পেমেন্ট পরে করতে পারি?</h1>
//                         <p className='text-[18px]'><span className='text-xl font-semibold'>উত্তর:</span> আপনি অনলাইনে ফ্লাইট অনুসন্ধান ও তুলনা করতে পারবেন কিন্তু পেমেন্ট না করা অব্দি আপনার বুকিং নিশ্চিত হবে না। অনলাইন বুকিং নিশ্চিত করতে তাৎক্ষণিক পেমেন্ট অপরিহার্য।</p>
//                     </div>




//                     <div className='py-8'>
//                         <h1 className='font-semibold text-xl'>Q. May I have a hard-copy receipt sent by post?</h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>A:</span> We dont send hard copy receipts by post. We will email your booking details and confirmation to you. Alternatively, you can come to our office for a hard copy of your purchase, and we will provide the hard copy to you.</p>
//                     </div>
//                     <div className=''>
//                         <h1 className='font-semibold text-xl'>  প্রশ্ন: আমি কি ডাকযোগে রিসিপ্টের হার্ড কপি সংগ্রহ করতে পারি? / আমাকে কি ডাকযোগে রিসিপ্টের হার্ড কপি pathano হবে?</h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'> উত্তর: দুঃ</span>খিত, ডাকযোগে রিসিপ্টের হার্ড কপি পাঠানো হয় না। আমরা ই-মেইলের মাধ্যমে বুকিং নিশ্চিত সংক্রান্ত বিস্তারিত পাঠিয়ে থাকি। তবে, আপনি সরাসরি আমাদের অফিস থেকে রিসিপ্টের হার্ড কপি সংগ্রহ করতে পারেন।</p>
//                     </div>
//                     <div className='py-8'>
//                         <h1 className='font-semibold text-xl'>   Q: Will it cost any extra charge if I purchase through a card from Sharetrip?</h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>   A: </span>During an online or an offline transaction there is a convenience fee that customers have to pay. However, there is no extra charge on anything you purchase from Sharetrip be it online or offline.</p>
//                     </div>
//                     <div className=''>
//                         <h1 className='font-semibold text-xl'>  প্রশ্ন: শেয়ারট্রিপ-এ কার্ডের মাধ্যমে বুকিং দিলে কি বাড়তি চার্জ পরিশোধ করতে হবে?</h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'> উত্তর: </span> অনলাইন বা অফলাইন বুকিংয়ের সময় একটি কনভিনিয়েন্স ফি আছে যা গ্রাহকদের দিতে হবে। তবে, শেয়ারট্রিপ-এ থেকে, অনলাইন বা অফলাইন বুকিংয়ে, কিছু কিনলে কোন অতিরিক্ত চার্জ নেই।</p>
//                     </div>
//                     <div className='py-8'>
//                         <h1 className='font-semibold text-xl'>  Q: What is ST Convenience Fee?</h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'> A: </span>ST Convenience fee is the charge that the customer needs to pay for the support, convenience and service that he/she is availing from the online platforms.</p>
//                     </div>
//                     <div className=''>
//                         <h1 className='font-semibold text-xl'>   প্রশ্ন: শেয়ারট্রিপ কনভিনিয়েন্স ফি কী?</h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>   উত্তর:  </span>কাস্টমাররা শেয়ারট্রিপ থেকে অনলাইনে যেসকল সহযোগিতা, কনভিনিয়েন্স ও সেবা উপভোগ করেন, তার জন্য প্রদেয় চার্জকে শেয়ারট্রিপ কনভিনিয়েন্স ফি বলা হয়।
//                         </p>
//                     </div>
//                     <div className='py-8'>
//                         <h1 className='font-semibold text-xl'>  Q: Is the ST Convenience Fee refundable?</h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>   A: </span> ST Convenience Fee is non-refundable.
//                         </p>
//                     </div>
//                     <div className=''>
//                         <h1 className='font-semibold text-xl'>    প্রশ্ন: শেয়ারট্রিপ কনভিনিয়েন্স ফি কী ফেরতযোগ্য?</h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                             উত্তর:  </span> দুঃখিত, শেয়ারট্রিপ কনভিনিয়েন্স ফি ফেরতযোগ্য নয়।
//                         </p>
//                     </div>
//                     <div className='py-8'>
//                         <h1 className='font-semibold text-xl'> Q: What is the process of cancelling a purchased ticket on Sharetrip?</h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                             A:   </span> Kindly email us at flight@Sharetrip.net for refund and cancellation of the flight tickets. Cancellation and refund policies differ from airline to airline. For cancellation, Sharetrip will charge you based on the airline's policy. In addition, BDT 1500 per person is Sharetrip's refund service fee, and BDT 500 is the service fee for International Air Tickets. For domestic, Sharetrip's refund service fee is BDT 300 per person, and the date change service fee is BDT 200 per person. We entirely follow the airline's refund policy. The airline has the absolute right to the airlines refund policy and can change anytime; Sharetrip has no control over the airline's policy.
//                         </p>
//                     </div>
//                     <div className=''>
//                         <h1 className='font-semibold text-xl'>
//                             প্রশ্ন: শেয়ারট্রিপ-এ ক্রয়কৃত টিকিট বাতিল করার প্রকিয়া কী?</h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                             উত্তর:    </span> ফ্লাইট টিকিট রিফান্ড কিংবা বাতিলের জন্য অনুগ্রহপূর্বক flight@Sharetrip.net ঠিকানায় মেইল করুন। বিভিন্ন এয়ারলাইনসের ক্ষেত্রে বাতিল ও রিফান্ড পলিসি ভিন্ন ভিন্ন হয়। বাতিলের ক্ষেত্রে, নির্দিষ্ট এয়ারলাইনের পলিসি অনুযায়ী আপনাকে চার্জ পরিশোধ করতে হবে। উপরন্তু, শেয়ারট্রিপ-এর রিফান্ড সার্ভিস ফি জন প্রতি ৳ ১,৫০০। ইন্টারন্যাশনাল এয়ার টিকিটের ক্ষেত্রে সার্ভিস ফি জন প্রতি ৳ ৫০০। ডোমেস্টিক এয়ার টিকিটের ক্ষেত্রে, রিফান্ড সার্ভিস ফি জন প্রতি ৳ ৩০০ ও তারিকজ পরিবর্তনের সার্ভিস ফি জন প্রতি ৳ ২০০। আমরা পুরোপুরিভাবে এয়ারলাইনের রিফান্ড পলিসি অনুসরণ করি। এয়ারলাইনস তাদের রিভান্ড পলিসির সত্ত্বাধিকারী এবং যেকোনো সময় তা পরিবর্তনের ক্ষমতা রাখে; এয়ারলাইনের পলিসির ওপর  শেয়ারট্রিপের কোনো প্রকারের নিয়ন্ত্রণ নেই

//                         </p>
//                     </div>
//                     <div className='py-8'>
//                         <h1 className='font-semibold text-xl'>
//                             Q: What is the process of changing the date of any flights on Sharetrip?
//                         </h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                             A:    </span> Kindly email us at flight@Sharetrip.net for changing the date of the flight tickets. As per the individual airline's policy, the process of changing the date differs. Suppose the airline allows changing the flight date. In that case, we charge an airline's date change fee plus the fare difference of your revised flight date from the previously purchased flight’s fare and a service fee of BDT 500 per person for any international air ticket and BDT 200 per person for domestic air ticket within Bangladesh. The airline has the absolute right to the airline's refund policy and can change anytime; Sharetrip has no control over the airline's policy.


//                         </p>
//                     </div>
//                     <div className=''>
//                         <h1 className='font-semibold text-xl'>
//                             প্রশ্ন: শেয়ারট্রিপ-এ ফ্লাইটের তারিখ পরিবর্তনের প্রসেস কী?
//                         </h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                             উত্তর:    </span> ফ্লাইট টিকিটের তারিখ পরিবর্তন করতে শেয়ারট্রিপ অ্যাপ বা ওয়েবসাইটে আপনার প্রোফাইলে গিয়ে "আমার বুকিং" ট্যাপ করুন। তারপর তারিখ পরিবর্তন/বাতিল/রিফান্ড অপশন সিলেক্ট করার মাধ্যমে তারিখ পরিবর্তন, রিফান্ড কিংবা বাতিল করতে পারবেন।বিস্তারিত জানতে বা সহযোগিতার জন্য flight@Sharetrip.net ঠিকানায় মেইল করুন। এয়ারলাইনসের পলিসির উপর নির্ভর করে তারিখ পরিবর্তনের প্রসেস ভিন্ন ভিন্ন হয়ে থাকে। মনে করুন, কোনো এয়ারলাইন তারিখ পরিবর্তনের সুবিধা দিয়ে থাকে। এক্ষেত্রে, ফ্লাইটের তারিখ পরিবর্তনের জন্য আপনাকে নির্ধারিত ফি, পূর্ববর্তী ফ্লাইটের চেয়ে পরিবর্তিত ফ্লাইটের ফেয়ারের পার্থক্য (যদি থেকে থাকে) এবং জন প্রতি ৳ ৫০০ সার্ভিস ফি (ইন্টারন্যাশনাল এয়ার টিকিটের ক্ষেত্রে) পরিশোধ করতে হবে। ডোমেস্টিক এয়ার টিকিটের ক্ষেত্রে, বাংলাদেশের ভেতরে সার্ভিস ফি জন প্রতি ৳ ২০০। এয়ারলাইনস তাদের রিভান্ড পলিসির সত্ত্বাধিকারী এবং যেকোনো সময় তা পরিবর্তনের ক্ষমতা রাখে; এয়ারলাইনের পলিসির ওপর  শেয়ারট্রিপের কোনো প্রকারের নিয়ন্ত্রণ নেই।


//                         </p>
//                     </div>
//                     <div className='py-8'>
//                         <h1 className='font-semibold text-xl'>
//                             Q: When and how can I receive my refund from Sharetrip?
//                         </h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                             A:  </span> We immediately submit any refund to our bank. Our partner banks may take up to 15 working days to complete the procedure from the submission date of a refund request. In addition, some banks may take up to 10-12 banking weeks or even the next billing cycle. For a dual currency refund, your will get converted currency by your credit card company.



//                         </p>
//                     </div>
//                     <div className='py-8'>
//                         <h1 className='font-semibold text-xl'>
//                             প্রশ্ন: আমি কবে এবং কিভাবে শেয়ারট্রিপ-এ রিফান্ড পেতে পারি?
//                         </h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                             উত্তর:  </span> আমরা যেকোনো রিফান্ড তাৎক্ষণিক ব্যাংকে জমা দিয়ে দিই। আমাদের পার্টনার ব্যাংকের রিফান্ড প্রক্রিয়া সম্পন্ন করতে রিফান্ড রিকুস্টের তারিখ হতে ১৫ কার্যদিবস সময় লাগতে পারে। এছাড়াও, কিছু কিছু ব্যাংকের রিফান্ড প্রক্রিয়া সম্পন্ন করতে ১০-১২ ব্যাংকিং সপ্তাহ কিংবা পরবর্তী বিলিং সাইকেল পর্যন্তও সময় লাগতে পারে। ডুয়াল কারেন্সি রিফান্ডের ক্ষেত্রে, আপনি আপনার ক্রেডিট কার্ড কোম্পানির মাধ্যমে কনভার্টেড কারেন্সি রিসিভ করবেন।



//                         </p>
//                     </div>
//                     <div className=''>
//                         <h1 className='font-semibold text-xl'>
//                             Refund Modality:
//                         </h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                         </span>  Sharetrip will automatically refund the money precisely how it received it. As per the payment modality, the refund process will be the same. However, the customer will incur a service charge or cashout charge for any refund claim through MFS (Mobile Financial Services), e.g. Bkash, Nagad, Rocket, etc. The charge amount is as per MFS's terms and policy.


//                         </p>
//                     </div>
//                     <div className='py-8'>
//                         <h1 className='font-semibold text-xl'>
//                             রিফান্ড পদ্ধতি:
//                         </h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                         </span>   যেভাবে পেমেন্ট রিসিভ করা হয়, শেয়ারট্রিপ ঠিক একইভাবে স্বয়ংক্রিয় পদ্ধতিতে টাকা রিফান্ড করে থাকে। রিফান্ড ও পেমেন্ট, উভয়ের পদ্ধতি একই হয়ে থাকে। তবে, গ্রাহক যদি এম.এফ.এস (মোবাইল ফাইন্যান্সিয়াল সার্ভিস) যেমন: বিকাশ, নগদ, রকেট, ইত্যাদির মাধ্যমে রিফান্ড পেতে চান, তাহলে নির্ধারিত পরিমাণ সার্ভিস চার্জ বা ক্যাশ আউট চার্জ পরিশোধ করতে হবে। চার্জের পরিমাণ এম.এফ.এস -এর শর্ত ও পলিসির উপর নির্ভরশীল।



//                         </p>
//                     </div>
//                     <div className=''>
//                         <h1 className='font-semibold text-xl'>
//                             Q: What is a Service fee on Sharetrip?
//                         </h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                             A:
//                         </span> Cancellation and refund policies differ from airline to airline.
//                             For cancellation by Airline, Sharetrip will not charge any additional fees.  For voluntary cancellation charges are applicable and given below.


//                         </p>
//                     </div>

//                     {/* =======================Hotel started -================ */}

//                     <div className='pt-12'>
//                         <h1 className='text-3xl font-semibold'>Hotel</h1>

//                         <div className='py-8'>
//                             <h1 className='font-semibold text-xl'>
//                                 Q: How do I make a booking on Sharetrip?
//                             </h1>
//                             <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                                 A:  </span> Please follow the steps below for booking on Sharetrip
//                                 <br />
//                                 <br /> - Click the hotel's tab from our homepage.

//                                 <br /> - Enter your destination and desired date.

//                                 <br /> - Click the SEARCH HOTELS button. You'll get a page with a hotel list that is available on your desired date and destination.

//                                 <br />   -First, click on show details and get the full hotel details. Then select your rooms from the available option.

//                                 <br /> -Then click Reserve, which will take you to a booking page where you will need to update your information.

//                                 <br />   -Finally, pay through your card or MFS to complete your purchase.

//                             </p>
//                         </div>
//                         <div className='py-8'>
//                             <h1 className='font-semibold text-xl'>
//                                 প্রশ্ন: শেয়ারট্রিপ-এ আমি কিভাবে হোটেল বুক করব?
//                                 উত্তর: শেয়ারট্রিপ-এ হোটেল বুক করতে নীচে উল্লিখিত ধাপ অনুসরণ করতে পারে
//                             </h1>
//                             <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                                 উত্তর:  </span> আমাদের হোমপেজের 'হোটেল' ট্যাব ক্লিক করুন।
//                                 আপনার পছন্দের লোকেশন ও তারিখ লিখুন।
//                                 'Search Hotels' বাটনে ক্লিক করুন। আপনার দেওয়া লোকেশন ও তারিখে কোন কোন হোটেল অ্যাভেইলেবেল, তার একটি লিস্ট পাবেন।
//                                 রিস্তারিত জানতে আপনার পছন্দের হোটেলে ক্লিক করে হোটেল সম্পর্কে জেনে নিন। তারপর অ্যাভেইলেবেল অপশন থেকে রুম সিলেক্ট করুন।
//                                 তারপর 'রিজার্ভ' বাটনে ক্লিক করলে আপনাকে নিয়ে যাওয়া হবে একটি বুকিং পেইজে। এখানে আপনার সকল তথ্য যুক্ত করুন।
//                                 সবশেষে, আপনার কার্ড কিংবা এম.এফ.এস-এর মাধ্যমে পেমেন্ট করে বুকিং নিশ্চিত করুন।
//                             </p>
//                         </div>
//                         <div className='py-8'>
//                             <h1 className='font-semibold text-xl'>
//                                 Can you provide the room rates per person or room-wise on Sharetrip?
//                             </h1>
//                             <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                                 A:  </span>
//                                 you will see the room rates as per room choice. You will never see room rent as per person.

//                             </p>
//                         </div>
//                         <div className='py-8'>
//                             <h1 className='font-semibold text-xl'>
//                                 প্রশ্ন:শেয়ারট্রিপ-এ কি জন প্রতি রুম রেট বা রুম অনুযায়ী রুম রেট জানা যাবে?
//                             </h1>
//                             <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                                 উত্তর:  </span> আপনি রুমের ধরণ অনুসারে রুম রেট জানতে পারবেন। তবে জন প্রতি রুম রেট জানা যাবে না।
//                             </p>
//                         </div>

//                     </div>


//                     <div className='text-3xl font-bold pt-6'>
//                         <h1>Holiday</h1>


//                         <h1 className='font-semibold text-xl pt-6'>
//                             Are the prices for holidays shown on Sharetrip Website for two people?
//                         </h1>
//                         <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                             A:  </span>
//                             Whatever price for a holiday you see is always for a single traveller. However, suppose you are travelling as a couple or two-person. In that case, you can also view availability for a minimum of two travellers travelling together.
//                         </p>

//                         <div className='py-6'>
//                             <h1 className='font-semibold text-xl'>
//                                 Q: What is a Service fee on Sharetrip?
//                             </h1>
//                             <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                                 A:
//                             </span>  How do I apply for refund/cancellation on Sharetrip?
//                                 Yes, you can reach us through Customer Support or send an email to vacation@Sharetrip.net

//                             </p>
//                         </div>
//                         <div className='py-'>
//                             <h1 className='font-semibold text-xl'>
//                                 Q: Are holiday prices constant on Sharetrip?
//                             </h1>
//                             <p className='text-[18px]'> <span className='text-xl font-semibold'>
//                                 A:
//                             </span>  No, our holiday prices are not constant. They can change due to airfare differences and hotel price fluctuations. Plus, holiday rates are not applicable for events like Eid, Durga Puja, Christmas, Long Weekends and even New Year's Eve.

//                             </p>
//                         </div>

//                         <div className='py-8'>
//                             <h1 className='text-3xl font-bold '>Visa</h1>
//                         </div>
//                     </div>

//                 </div>
//             </div>


//         </div>

//     );
// };

// export default Faq;


import React, { useState } from 'react';
import styles from './styles.module.css';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: 'I have a debit card. May I use my debit card to book a flight from Sharetrip?',
            answer: 'Yes, you can easily book a flight with any local or international card, debit or even your credit card.',
        },
        {
            question: 'Can you book a domestic flight on Sharetrip?',
            answer: 'Yes, we provide both domestic and international flight services. Please let us know your travel plan to assist you in finding the preferred flight.',
        },
        {
            question: 'Can I make the payment later for an online booking on Sharetrip?',
            answer: 'Unfortunately, you cannot hold the booking unless you pay. You instantly need to pay the amount to confirm your purchase made online.',
        },
        {
            question: 'Will it cost any extra charge if I purchase through a card from Sharetrip?',
            answer: 'During an online or an offline transaction, there is a convenience fee that customers have to pay. However, there is no extra charge on anything you purchase from Sharetrip.',
        },
        {
            question: 'What is the process of cancelling a purchased ticket on Sharetrip?',
            answer: 'Kindly email us at flight@Sharetrip.net for refund and cancellation of the flight tickets. Cancellation and refund policies differ from airline to airline.',
        },
        {
            question: 'When and how can I receive my refund from Sharetrip?',
            answer: 'We immediately submit any refund to our bank. Our partner banks may take up to 15 working days to complete the procedure from the submission date of a refund request.',
        },
    ];

    return (
        <div className='lg:px-28 px-6'>
            <h1 className={`py-16 font-bold text-4xl text-black ${styles.bg}`}>FAQ</h1>
            <div className='lg:flex gap-8'>
                <div className='lg:w-1/4 pt-8 sticky'>
                    <h1 className='w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md border-[1px] hover:font-bold border-gray-300'>Holiday</h1>
                    <h1 className='w-full px-4 py-2 hover:text-white hover:bg-blue-500 rounded-md text-black font-semibold border-[1px] my-1 hover:font-bold border-gray-300'>Hotel</h1>
                    <h1 className='w-full px-4 py-2 hover:text-white hover:bg-blue-500 rounded-md text-black font-semibold border-[1px] hover:font-bold border-gray-300'>Flight</h1>
                    <h1 className='w-full px-4 py-2 hover:text-white hover:bg-blue-500 rounded-md text-black font-semibold border-[1px] hover:font-bold my-1 border-gray-300'>Visa</h1>
                </div>

                <div className='bg-white lg:w-3/4 text-black p-6 rounded-lg shadow-md'>
                    <p className='py-8 text-[18px]'>
                        We have put together some of the most common questions that we get asked a lot. Please check through the categories to get your answer without any delay.
                    </p>

                    <h1 className='font-semibold text-4xl'>Flight</h1>

                    {faqData.map((item, index) => (
                        <div key={index} className='py-4 border-b border-gray-300'>
                            <button
                                className={`w-full text-left font-semibold text-xl hover:bg-gray-100 py-2 transition-colors ${openIndex === index ? 'bg-gray-100' : ''}`}
                                onClick={() => toggleQuestion(index)}
                            >
                                Q: {item.question}
                            </button>
                            {openIndex === index && (
                                <p className='text-[18px] mt-2'>{item.answer}</p>
                            )}
                        </div>
                    ))}

                    {/* More sections can be added here in a similar manner */}
                </div>
            </div>
        </div>
    );
};

export default Faq;
