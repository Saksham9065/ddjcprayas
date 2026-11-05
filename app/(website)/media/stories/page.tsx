"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaChevronDown, FaTimes } from "react-icons/fa";
import { useApp } from "@/context/AppContext";

type Story = {
  id: number;
  name: { en: string; hi: string };
  location: { en: string; hi: string };
  brief: { en: string; hi: string };
  detail: { en: string; hi: string };
};

const stories: Story[] = [
  {
    id: 1,
    name: { en: "Tota Kumari", hi: "तोता कुमारी" },
    location: { en: "Harsinghpur, Jalaun, Uttar Pradesh", hi: "हरसिंहपुर, जालौन, उत्तर प्रदेश" },
    brief: {
      en: "A Dalit mother fought for justice after her minor daughter was assaulted, facing police refusal and an allegedly altered charge sheet.",
      hi: "एक दलित माँ ने अपनी नाबालिग बेटी पर हमले के बाद न्याय के लिए संघर्ष किया, पुलिस की अनदेखी और कथित रूप से बदली गई चार्जशीट का सामना किया।",
    },
    detail: {
      en: `This is the story of a Dalit woman, Tota Kumari, and her minor daughter from Harsinghpur village in Jalaun district, Uttar Pradesh. Their story highlights the immense difficulties faced by marginalized communities even when seeking justice.

Tota Kumari is an ordinary, uneducated woman who lives in the village with her family. A young man from the same village, Anuj Kumar, frequently harassed her daughter and had inappropriate intentions towards her. When Tota Kumari's daughter informed her mother about this, she went to Anuj's house to complain.

However, an argument broke out there. Anuj's mother, Meena Devi, and sister, Hemlata, misbehaved with Tota Kumari and her husband. They also used caste-based abusive language, saying, "You Chamars, get out of here. Whatever Anuj has done is right."

A Daylight Assault Inside Their Home

A few days later, on April 6, 2024, at around 1:30 PM, Tota Kumari was at home with her minor daughter when Anuj, his mother Meena, and his sister Premlata forcibly entered their house.

Anuj grabbed the girl with criminal intent and tore her clothes. When Tota Kumari tried to protect her daughter, Meena and Premlata held her back and assaulted her. Meanwhile, Anuj forcibly dragged the girl into a room and raped her.

At that moment, Tota Kumari's husband returned home and raised an alarm. Hearing his cries, some neighbours gathered at the spot. Seeing them, the accused fled after threatening to kill the family.

Struggling from Door to Door for Justice

After the incident, Tota Kumari and her husband went with their daughter to the concerned police station in Kuthaund and submitted a written complaint. However, the police refused to register their complaint and sent them away.

They did not give up. The following day, they approached the Senior Superintendent of Police (SSP) in Orai, but received no response there either.

Finally, they approached the court and filed an application under Section 156(3) of the CrPC. After two months of legal struggle, the court passed an order directing action. The case included IPC Sections 354, 376, 511, 452, 323, 506 and 504, along with Sections 7 and 8 of the POCSO Act and Section 3(2)(5) of the SC/ST Act.

Alleged Police Collusion and DDJC's Support

Following the court's order, an officer at the Circle Officer (CO) level initiated an investigation. However, it is alleged that the police accepted money and altered the entire charge sheet before filing it in court. Several serious charges were removed, allegedly to protect the accused.

When this came to light, the Dalit Dignity and Justice Centre (DDJC) intervened. Its team challenged the incorrect charge sheet and has continued providing legal support to the victim.

The case is still pending before the court. DDJC remains committed to ensuring that the victim receives justice and that the accused are punished appropriately for their crimes.

This story demonstrates how difficult the fight for justice can become, especially when the system itself is alleged to support injustice.`,
      hi: `यह उत्तर प्रदेश के जालौन जिले के हरसिंहपुर गाँव की दलित महिला तोता कुमारी और उनकी नाबालिग बेटी की कहानी है। यह कहानी बताती है कि न्याय की तलाश में हाशिए के समुदायों को कितनी भारी कठिनाइयों का सामना करना पड़ता है।

तोता कुमारी एक साधारण, अशिक्षित महिला हैं जो अपने परिवार के साथ गाँव में रहती हैं। उसी गाँव का एक युवक, अनुज कुमार, अक्सर उनकी बेटी को परेशान करता था और उसके प्रति गलत इरादे रखता था। जब तोता कुमारी की बेटी ने अपनी माँ को यह बात बताई, तो वे शिकायत करने अनुज के घर गईं।

लेकिन वहाँ विवाद हो गया। अनुज की माँ मीना देवी और बहन हेमलता ने तोता कुमारी और उनके पति के साथ दुर्व्यवहार किया। उन्होंने जातिसूचक गालियाँ भी दीं और कहा, "तुम चमार लोग यहाँ से चले जाओ। अनुज ने जो किया है, वह सही है।"

दिनदहाड़े घर में हमला

कुछ दिन बाद, 6 अप्रैल 2024 को लगभग दोपहर 1:30 बजे, तोता कुमारी अपनी नाबालिग बेटी के साथ घर पर थीं, तभी अनुज, उसकी माँ मीना और उसकी बहन प्रेमलता जबरन उनके घर में घुस आए।

अनुज ने आपराधिक इरादे से लड़की को पकड़ लिया और उसके कपड़े फाड़ दिए। जब तोता कुमारी ने अपनी बेटी को बचाने की कोशिश की, तो मीना और प्रेमलता ने उन्हें पकड़ लिया और उनके साथ मारपीट की। इसी बीच अनुज ने जबरन लड़की को कमरे में खींच लिया और उसके साथ बलात्कार किया।

उसी समय तोता कुमारी के पति घर लौट आए और उन्होंने शोर मचाया। उनकी आवाज़ सुनकर कुछ पड़ोसी मौके पर इकट्ठा हो गए। उन्हें देखकर आरोपी परिवार को जान से मारने की धमकी देकर भाग गए।

न्याय के लिए दर-दर भटकना

घटना के बाद तोता कुमारी और उनके पति बेटी को लेकर कुठौंद के संबंधित थाने गए और लिखित शिकायत दी। लेकिन पुलिस ने उनकी शिकायत दर्ज करने से इनकार कर दिया और उन्हें लौटा दिया।

उन्होंने हार नहीं मानी। अगले दिन वे उरई में वरिष्ठ पुलिस अधीक्षक (SSP) के पास गए, लेकिन वहाँ भी कोई सुनवाई नहीं हुई।

अंततः उन्होंने न्यायालय का सहारा लिया और सीआरपीसी की धारा 156(3) के तहत आवेदन दायर किया। दो महीने के कानूनी संघर्ष के बाद न्यायालय ने कार्रवाई का आदेश दिया। मामले में आईपीसी की धारा 354, 376, 511, 452, 323, 506 और 504, साथ ही पॉक्सो अधिनियम की धारा 7 और 8 तथा एससी/एसटी अधिनियम की धारा 3(2)(5) शामिल की गईं।

पुलिस पर मिलीभगत का आरोप और DDJC का सहयोग

न्यायालय के आदेश के बाद क्षेत्राधिकारी (CO) स्तर के एक अधिकारी ने जांच शुरू की। हालांकि, आरोप है कि पुलिस ने पैसे लेकर न्यायालय में दाखिल करने से पहले पूरी चार्जशीट बदल दी। कई गंभीर धाराएँ हटा दी गईं, कथित तौर पर आरोपियों को बचाने के लिए।

जब यह बात सामने आई, तो दलित डिग्निटी एंड जस्टिस सेंटर (DDJC) ने हस्तक्षेप किया। टीम ने गलत चार्जशीट को चुनौती दी और पीड़िता को कानूनी सहायता देना जारी रखा।

मामला अभी न्यायालय में लंबित है। DDJC यह सुनिश्चित करने के लिए प्रतिबद्ध है कि पीड़िता को न्याय मिले और आरोपियों को उनके अपराधों के लिए उचित सजा दी जाए।

यह कहानी दिखाती है कि न्याय की लड़ाई कितनी कठिन हो सकती है, खासकर तब जब व्यवस्था पर ही अन्याय का समर्थन करने का आरोप हो।`,
    },
  },
  {
    id: 2,
    name: { en: "Goldy Devi", hi: "गोल्डी देवी" },
    location: { en: "Nibhahana, Chambal ravines, Jalaun", hi: "निभाहना, चंबल क्षेत्र, जालौन" },
    brief: {
      en: "A young Dalit woman aspiring to be a doctor survived an attempted assault; DDJC helped secure justice and compensation.",
      hi: "डॉक्टर बनने का सपना देखने वाली दलित युवती हमले के प्रयास से बची; DDJC ने न्याय और मुआवजा दिलाने में मदद की।",
    },
    detail: {
      en: `This is the story of Goldy Devi, who belongs to Nibhahana village in the Chambal ravine region of Jalaun district. Her village is located just a short distance from the village of the famous bandit Phoolan Devi.

Goldy completed her graduation and began working as a compounder at a medical store in Mahewa, approximately 15 kilometres from her village. Her dream was to become a doctor because there was no female doctor in her village, particularly one from the Dalit community.

A Dream and a Horrifying Incident

Goldy's journey was not easy. Since no government transport facility connected her village to the medical store, she had to walk approximately 4–5 kilometres every day.

One day, her father trusted a young man from the village and asked him to drop Goldy at the medical store on his motorcycle.

After travelling some distance, the young man stopped the motorcycle at an isolated place and asked Goldy for her phone number. When she refused, his intentions changed. He grabbed her hand, dragged her towards a nearby field and attempted to rape her.

Goldy shouted for help, but nobody was around. Fortunately, the sound of an approaching milk delivery vehicle frightened the accused. He released her and ran away.

Goldy somehow managed to reach home and narrated the entire incident to her family. Her family supported her and immediately approached the police station to register an FIR.

Challenges and DDJC's Support

After the FIR was registered, Goldy and her family began receiving threats demanding that they withdraw the case. They were warned of serious consequences if they refused.

The owner of the medical store also pressured Goldy to compromise and eventually removed her from the job.

During this difficult period, the DDJC team learned about the incident. The team visited Nibhahana village and met Goldy.

Goldy told them that she wanted to fight for justice but felt discouraged because of the threats and the loss of her employment.

The DDJC team counselled Goldy and her family, encouraged them and assured them of complete support throughout the legal struggle.

The Fight for Justice and a Step Towards Success

DDJC supported Goldy and her family emotionally as well as legally.

The team met police officials and pursued the timely filing of the charge sheet. After the charge sheet was filed, legal proceedings began in court.

The accused was arrested, and his bail application was rejected by the District Court.

When the accused approached the Allahabad High Court for bail, DDJC continued its legal efforts there as well. The High Court also rejected his bail application.

The team additionally applied for compensation under the SC/ST Act. However, the District Social Welfare Officer initially cited a lack of budget as the reason for not releasing the compensation.

DDJC did not give up and filed a writ petition before the Allahabad High Court. The High Court took immediate cognisance and sought reports from the District Magistrate and the Social Welfare Officer.

Following the court's directions, compensation of ₹1,50,000 was deposited into Goldy's bank account.

Today, Goldy continues to pursue her case. Her face once again reflects confidence, and the sadness in her eyes has faded.

With DDJC's support, she is not only fighting for justice but also moving forward towards fulfilling her dream of becoming a doctor.

The case is still pending before the court. However, Goldy's courage and DDJC's support demonstrate that injustice does not have to be accepted silently.`,
      hi: `यह गोल्डी देवी की कहानी है, जो जालौन जिले के चंबल बीहड़ क्षेत्र के निभाहना गाँव की रहने वाली हैं। उनका गाँव प्रसिद्ध डकैत फूलन देवी के गाँव से थोड़ी ही दूरी पर स्थित है।

गोल्डी ने स्नातक की पढ़ाई पूरी की और अपने गाँव से लगभग 15 किलोमीटर दूर महेवा में एक मेडिकल स्टोर पर कंपाउंडर के रूप में काम शुरू किया। उनका सपना डॉक्टर बनने का था, क्योंकि उनके गाँव में कोई महिला डॉक्टर नहीं थी, खासकर दलित समुदाय से।

एक सपना और एक भयावह घटना

गोल्डी की यात्रा आसान नहीं थी। चूँकि उनके गाँव से मेडिकल स्टोर तक कोई सरकारी परिवहन सुविधा नहीं थी, इसलिए उन्हें हर दिन लगभग 4–5 किलोमीटर पैदल चलना पड़ता था।

एक दिन उनके पिता ने गाँव के एक युवक पर भरोसा किया और उससे गोल्डी को अपनी मोटरसाइकिल पर मेडिकल स्टोर छोड़ने को कहा।

कुछ दूर जाने के बाद उस युवक ने मोटरसाइकिल एक सुनसान जगह पर रोक दी और गोल्डी से उनका मोबाइल नंबर माँगा। जब उन्होंने मना किया, तो उसके इरादे बदल गए। उसने गोल्डी का हाथ पकड़ लिया, उन्हें पास के खेत की ओर घसीटने लगा और बलात्कार का प्रयास किया।

गोल्डी ने मदद के लिए चिल्लाया, लेकिन आसपास कोई नहीं था। सौभाग्य से, पास आते दूध के वाहन की आवाज़ सुनकर आरोपी घबरा गया। उसने गोल्डी को छोड़ दिया और भाग गया।

गोल्डी किसी तरह घर पहुँचीं और पूरी घटना अपने परिवार को बताई। परिवार ने उनका साथ दिया और तुरंत थाने जाकर एफआईआर दर्ज कराई।

चुनौतियाँ और DDJC का सहयोग

एफआईआर दर्ज होने के बाद गोल्डी और उनके परिवार को मामला वापस लेने की धमकियाँ मिलने लगीं। इनकार करने पर गंभीर परिणाम भुगतने की चेतावनी दी गई।

मेडिकल स्टोर के मालिक ने भी गोल्डी पर समझौते का दबाव बनाया और अंततः उन्हें नौकरी से हटा दिया।

इस कठिन समय में DDJC टीम को घटना की जानकारी मिली। टीम निभाहना गाँव पहुँची और गोल्डी से मिली।

गोल्डी ने बताया कि वे न्याय के लिए लड़ना चाहती हैं, लेकिन धमकियों और नौकरी छिन जाने के कारण उनका मनोबल टूट रहा है।

DDJC टीम ने गोल्डी और उनके परिवार को परामर्श दिया, उनका हौसला बढ़ाया और पूरी कानूनी लड़ाई में साथ देने का आश्वासन दिया।

न्याय की लड़ाई और सफलता की ओर एक कदम

DDJC ने गोल्डी और उनके परिवार को भावनात्मक और कानूनी दोनों तरह से सहयोग दिया।

टीम ने पुलिस अधिकारियों से मुलाकात की और समय पर चार्जशीट दाखिल कराने का प्रयास किया। चार्जशीट दाखिल होने के बाद न्यायालय में कानूनी कार्यवाही शुरू हुई।

आरोपी को गिरफ्तार किया गया और जिला न्यायालय ने उसकी जमानत अर्जी खारिज कर दी।

जब आरोपी ने इलाहाबाद उच्च न्यायालय में जमानत के लिए आवेदन किया, तो DDJC ने वहाँ भी कानूनी प्रयास जारी रखे। उच्च न्यायालय ने भी उसकी जमानत अर्जी खारिज कर दी।

टीम ने एससी/एसटी अधिनियम के तहत मुआवजे के लिए भी आवेदन किया। हालांकि, जिला समाज कल्याण अधिकारी ने पहले बजट की कमी का हवाला देकर मुआवजा जारी करने से इनकार कर दिया।

DDJC ने हार नहीं मानी और इलाहाबाद उच्च न्यायालय में रिट याचिका दायर की। उच्च न्यायालय ने तत्काल संज्ञान लिया और जिलाधिकारी तथा समाज कल्याण अधिकारी से रिपोर्ट माँगी।

न्यायालय के निर्देशों के बाद गोल्डी के बैंक खाते में ₹1,50,000 का मुआवजा जमा किया गया।

आज गोल्डी अपना मामला जारी रखे हुए हैं। उनके चेहरे पर फिर से आत्मविश्वास झलकता है और आँखों की उदासी कम हुई है।

DDJC के सहयोग से वे न केवल न्याय के लिए लड़ रही हैं, बल्कि डॉक्टर बनने के अपने सपने की ओर भी आगे बढ़ रही हैं।

मामला अभी न्यायालय में लंबित है। फिर भी, गोल्डी का साहस और DDJC का सहयोग दिखाता है कि अन्याय को चुपचाप स्वीकार करना जरूरी नहीं है।`,
    },
  },
  {
    id: 3,
    name: { en: "Vijay Valmiki", hi: "विजय वाल्मीकि" },
    location: { en: "Valmiki Nagar, Jalaun, Uttar Pradesh", hi: "वाल्मीकि नगर, जालौन, उत्तर प्रदेश" },
    brief: {
      en: "From sanitation work and caste discrimination to studying law, Vijay became a community advocate with DDJC's support.",
      hi: "सफाई कार्य और जातिगत भेदभाव से निकलकर विजय ने DDJC के सहयोग से कानून की पढ़ाई शुरू की और समुदाय के लिए आवाज बने।",
    },
    detail: {
      en: `This is the story of Vijay Valmiki, a resident of Valmiki Nagar, a small town in Jalaun district of Bundelkhand, Uttar Pradesh.

His story is not merely about an individual's life. It is about breaking through the darkness of caste discrimination and creating a new identity.

Vijay's father works as a contractual sanitation worker, while his mother was engaged in manual scavenging (the practice of manually cleaning human waste).

From childhood, Vijay faced untouchability and caste-based discrimination. Even at school, he was humiliated because of his caste.

Society constantly reminded him that he belonged to a so-called "untouchable" caste, forcing him to face humiliation at every stage of life.

A Period of Struggle and Rejection

As he grew older, Vijay started working alongside his father cleaning dirty drains.

Later, he purchased an auto-rickshaw, hoping to improve his financial condition. However, he could not earn enough because people in the village and neighbourhood knew that he belonged to the Valmiki community.

Their discriminatory attitude made them reluctant to travel in his auto-rickshaw.

Consequently, he received very few passengers and could barely cover his expenses.

During this difficult period, his marriage was arranged. The marriage hall was booked, and invitations were distributed. However, the marriage was suddenly called off.

This incident deeply affected him emotionally.

An Incident That Changed His Life

One evening, some influential local people entered his house and assaulted his family members. They also used caste-based abusive language.

A few days earlier, Vijay's father had argued with these individuals over money. They were offended that a person from the so-called lower caste had dared to demand money from them.

Several people were injured in the incident, and a case was registered at Jalaun Kotwali Police Station.

To investigate the matter, the DDJC team visited Vijay's house.

During the conversation, Vijay angrily asked the team:

"What can you people actually do? We receive threats every day to compromise in the case. We are considered untouchable. How can we fight?"

As he narrated his experiences, tears filled his eyes.

The First Step Towards Justice

The DDJC team explained its work and encouraged Vijay to remain strong.

For the first time, he realised that there was an organisation where people could work without discrimination.

The very next day, Vijay visited the DDJC office and immediately joined the organisation.

He participated in legal and leadership training programmes organised by the institution.

These training programmes transformed his life.

Today, Vijay is studying law and independently pursuing legal matters. He regularly wears a black coat and visits the courtroom, working alongside DDJC to fight for the rights and dignity of Dalits and other marginalized communities.

A Dream Turned into Reality

Vijay says that he realised the true power of Dr. B. R. Ambedkar and the Indian Constitution quite late in life.

Today, he confidently approaches the District Magistrate's office and raises issues concerning his community.

The young man whose life once revolved around cleaning dirty drains and driving an auto-rickshaw is now building his identity as a lawyer from his community.

Vijay says:

"Those who once considered us untouchable now treat us with respect and speak to us respectfully. This was once just a dream, but the Dalit Dignity and Justice Centre team helped turn it into reality."`,
      hi: `यह विजय वाल्मीकि की कहानी है, जो उत्तर प्रदेश के बुंदेलखंड क्षेत्र के जालौन जिले के एक छोटे कस्बे वाल्मीकि नगर के निवासी हैं।

उनकी कहानी केवल एक व्यक्ति की नहीं है। यह जातिगत भेदभाव के अंधेरे को तोड़कर नई पहचान बनाने की कहानी है।

विजय के पिता संविदा सफाई कर्मचारी के रूप में काम करते हैं, जबकि उनकी माँ मैला ढोने (मानव मल की हाथ से सफाई) के काम में लगी थीं।

बचपन से ही विजय ने छुआछूत और जातिगत भेदभाव का सामना किया। स्कूल में भी जाति के कारण उनका अपमान किया जाता था।

समाज बार-बार उन्हें याद दिलाता था कि वे तथाकथित "अछूत" जाति से हैं, जिसके कारण उन्हें जीवन के हर पड़ाव पर अपमान सहना पड़ा।

संघर्ष और अस्वीकृति का दौर

बड़े होने पर विजय ने अपने पिता के साथ गंदे नाले साफ करने का काम शुरू किया।

बाद में उन्होंने अपनी आर्थिक स्थिति सुधारने की उम्मीद में एक ऑटो-रिक्शा खरीदा। लेकिन वे ज्यादा कमाई नहीं कर पाए, क्योंकि गाँव और मोहल्ले के लोग जानते थे कि वे वाल्मीकि समुदाय से हैं।

भेदभावपूर्ण रवैये के कारण लोग उनके ऑटो-रिक्शा में बैठने से हिचकिचाते थे।

नतीजतन, उन्हें बहुत कम सवारियाँ मिलती थीं और वे मुश्किल से अपना खर्च निकाल पाते थे।

इसी कठिन दौर में उनकी शादी तय हुई। विवाह भवन बुक हो गया और निमंत्रण भी बँट गए। लेकिन अचानक शादी टूट गई।

इस घटना ने उन्हें गहरे भावनात्मक आघात में डाल दिया।

एक घटना जिसने जीवन बदल दिया

एक शाम कुछ प्रभावशाली स्थानीय लोग उनके घर में घुस आए और परिवार के सदस्यों के साथ मारपीट की। उन्होंने जातिसूचक गालियाँ भी दीं।

कुछ दिन पहले विजय के पिता का इन लोगों से पैसे के लेन-देन को लेकर विवाद हुआ था। उन्हें इस बात से आपत्ति थी कि तथाकथित निचली जाति का व्यक्ति उनसे पैसे माँगने की हिम्मत कैसे कर सकता है।

इस घटना में कई लोग घायल हुए और जालौन कोतवाली थाने में मामला दर्ज हुआ।

मामले की जानकारी लेने के लिए DDJC टीम विजय के घर पहुँची।

बातचीत के दौरान विजय ने गुस्से में टीम से पूछा:

"आप लोग वास्तव में क्या कर सकते हैं? हमें हर दिन मामले में समझौता करने की धमकियाँ मिलती हैं। हमें अछूत माना जाता है। हम कैसे लड़ सकते हैं?"

अपने अनुभव बताते हुए उनकी आँखों में आँसू आ गए।

न्याय की ओर पहला कदम

DDJC टीम ने अपना काम समझाया और विजय को मजबूत बने रहने के लिए प्रोत्साहित किया।

पहली बार उन्हें एहसास हुआ कि एक ऐसा संगठन भी है जहाँ लोग बिना भेदभाव के काम कर सकते हैं।

अगले ही दिन विजय DDJC कार्यालय पहुँचे और संगठन से जुड़ गए।

उन्होंने संस्था द्वारा आयोजित कानूनी और नेतृत्व प्रशिक्षण कार्यक्रमों में भाग लिया।

इन प्रशिक्षण कार्यक्रमों ने उनका जीवन बदल दिया।

आज विजय कानून की पढ़ाई कर रहे हैं और स्वतंत्र रूप से कानूनी मामलों को आगे बढ़ा रहे हैं। वे नियमित रूप से काला कोट पहनकर अदालत जाते हैं और DDJC के साथ मिलकर दलितों तथा अन्य हाशिए के समुदायों के अधिकारों और गरिमा के लिए काम करते हैं।

सपने का साकार होना

विजय कहते हैं कि उन्हें डॉ. बी. आर. अंबेडकर और भारतीय संविधान की असली ताकत का एहसास जीवन में काफी देर से हुआ।

आज वे आत्मविश्वास के साथ जिलाधिकारी कार्यालय जाते हैं और अपने समुदाय से जुड़े मुद्दे उठाते हैं।

जिस युवक का जीवन कभी गंदे नाले साफ करने और ऑटो-रिक्शा चलाने तक सीमित था, वह अब अपने समुदाय से वकील के रूप में अपनी पहचान बना रहा है।

विजय कहते हैं:

"जो लोग कभी हमें अछूत मानते थे, अब वे हमें सम्मान देते हैं और आदर से बात करते हैं। यह कभी सिर्फ एक सपना था, लेकिन दलित डिग्निटी एंड जस्टिस सेंटर की टीम ने इसे साकार करने में मदद की।"`,
    },
  },
  {
    id: 4,
    name: { en: "Ayush", hi: "आयुष" },
    location: { en: "Bajida, Uttar Pradesh", hi: "बाजिदा, उत्तर प्रदेश" },
    brief: {
      en: "Despite discrimination and hardship, Ayush built a coaching centre and became a DDJC Para Legal Volunteer serving his community.",
      hi: "भेदभाव और कठिनाइयों के बावजूद आयुष ने कोचिंग शुरू की और DDJC के पैरा लीगल वॉलंटियर बनकर समुदाय की सेवा की।",
    },
    detail: {
      en: `The story of Ayush, a Dalit youth from Bajida village in Uttar Pradesh, presents an example of success and dignity achieved despite poverty, social discrimination and humiliation.

His journey demonstrates how education and determination can help overcome even the most difficult challenges.

Early Life and Challenges

Ayush, son of Santosh Kumar, spent his childhood in the narrow, unpaved streets of his village.

His father is a government employee, while his mother is a homemaker. Ayush has one brother and one sister.

From childhood, he faced caste-based discrimination and insulting remarks. People frequently mocked him because of his caste, particularly when he went to school.

These experiences left deep emotional scars.

Education as the Greatest Weapon

Despite these difficulties, Ayush never allowed his dreams to fade.

He decided that education would be the most powerful weapon to transform his life.

After completing his early education in the village, he pursued graduation at the district level.

Despite his family's weak financial condition, he refused to give up.

Alongside his college studies, he started a small coaching centre in his village.

Initially, only five students enrolled. However, through hard work, dedication and honest teaching, his reputation gradually spread throughout the surrounding area.

Becoming an Agent of Social Change

Ayush transformed his coaching centre into more than just an educational institution. He made it a centre for social transformation.

He taught children not only academic subjects but also self-respect, equality and awareness of their rights.

He inspired students through the lives and contributions of Babasaheb Dr. B. R. Ambedkar and other prominent Dalit leaders.

He believed that education was the real power capable of breaking the chains of discrimination.

Although society attempted several times to discourage him, he converted every challenge into an opportunity.

Gradually, his coaching centre became known as a "Home of Hope", where broken dreams could be rebuilt.

The Role of the Dalit Dignity and Justice Centre

During this journey, the DDJC team learned about Ayush through a survey.

Recognising his dedication and potential, the organisation selected him as a Para Legal Volunteer (PLV).

After joining DDJC, Ayush received training on various laws at the Panchayat and district levels.

He also participated in programmes such as Ambedkar Jayanti alongside the DDJC team, further strengthening his leadership abilities.

Present Situation and Transformation

Today, Ayush's story serves as an inspiration to many people.

The young man who once felt broken because of caste-based humiliation has become a confident community leader and guide.

Currently, Ayush is a BTC student and provides free education to poor and Dalit children in his village.

He is always ready to help villagers, whether they need assistance with government schemes or educational matters.

People and students in his village increasingly look up to him as a leader.

Ayush's journey proves that no matter how difficult the struggle may be, courage and education can break every barrier and transform an individual into a true leader of society.`,
      hi: `उत्तर प्रदेश के बाजिदा गाँव के दलित युवक आयुष की कहानी गरीबी, सामाजिक भेदभाव और अपमान के बावजूद सफलता और गरिमा हासिल करने का उदाहरण है।

उनकी यात्रा दिखाती है कि शिक्षा और दृढ़ संकल्प से सबसे कठिन चुनौतियों को भी पार किया जा सकता है।

प्रारंभिक जीवन और चुनौतियाँ

संतोष कुमार के पुत्र आयुष ने अपना बचपन गाँव की संकरी, कच्ची गलियों में बिताया।

उनके पिता सरकारी कर्मचारी हैं, जबकि उनकी माँ गृहिणी हैं। आयुष का एक भाई और एक बहन है।

बचपन से ही उन्हें जातिगत भेदभाव और अपमानजनक टिप्पणियों का सामना करना पड़ा। लोग अक्सर जाति के कारण उनका मज़ाक उड़ाते थे, खासकर जब वे स्कूल जाते थे।

इन अनुभवों ने उनके मन पर गहरे भावनात्मक घाव छोड़े।

शिक्षा — सबसे बड़ा हथियार

इन कठिनाइयों के बावजूद आयुष ने अपने सपनों को धुंधलाने नहीं दिया।

उन्होंने तय किया कि शिक्षा ही उनके जीवन को बदलने का सबसे शक्तिशाली हथियार होगी।

गाँव में प्रारंभिक शिक्षा पूरी करने के बाद उन्होंने जिला स्तर पर स्नातक की पढ़ाई की।

परिवार की कमजोर आर्थिक स्थिति के बावजूद उन्होंने हार नहीं मानी।

कॉलेज की पढ़ाई के साथ-साथ उन्होंने अपने गाँव में एक छोटा कोचिंग सेंटर शुरू किया।

शुरुआत में केवल पाँच छात्रों ने नामांकन कराया। लेकिन कड़ी मेहनत, समर्पण और ईमानदार शिक्षण से उनकी पहचान धीरे-धीरे आसपास के क्षेत्र में फैल गई।

सामाजिक परिवर्तन का माध्यम

आयुष ने अपने कोचिंग सेंटर को केवल एक शैक्षणिक संस्थान नहीं, बल्कि सामाजिक परिवर्तन का केंद्र बना दिया।

वे बच्चों को केवल विषय ही नहीं पढ़ाते थे, बल्कि आत्मसम्मान, समानता और अपने अधिकारों के प्रति जागरूकता भी सिखाते थे।

उन्होंने बाबासाहेब डॉ. बी. आर. अंबेडकर और अन्य प्रमुख दलित नेताओं के जीवन और योगदान से विद्यार्थियों को प्रेरित किया।

उनका मानना था कि शिक्षा ही वह असली शक्ति है जो भेदभाव की जंजीरों को तोड़ सकती है।

समाज ने कई बार उन्हें हतोत्साहित करने की कोशिश की, लेकिन उन्होंने हर चुनौती को अवसर में बदल दिया।

धीरे-धीरे उनका कोचिंग सेंटर "आशा का घर" के रूप में जाना जाने लगा, जहाँ टूटे हुए सपनों को फिर से गढ़ा जा सकता था।

दलित डिग्निटी एंड जस्टिस सेंटर की भूमिका

इस यात्रा के दौरान DDJC टीम को एक सर्वेक्षण के माध्यम से आयुष के बारे में जानकारी मिली।

उनकी प्रतिबद्धता और क्षमता को पहचानते हुए संस्था ने उन्हें पैरा लीगल वॉलंटियर (PLV) के रूप में चुना।

DDJC से जुड़ने के बाद आयुष ने पंचायत और जिला स्तर पर विभिन्न कानूनों का प्रशिक्षण प्राप्त किया।

उन्होंने DDJC टीम के साथ अंबेडकर जयंती जैसे कार्यक्रमों में भी भाग लिया, जिससे उनकी नेतृत्व क्षमता और मजबूत हुई।

वर्तमान स्थिति और परिवर्तन

आज आयुष की कहानी कई लोगों के लिए प्रेरणा है।

जो युवक कभी जातिगत अपमान से टूट चुका था, वह आज आत्मविश्वासी सामुदायिक नेता और मार्गदर्शक बन चुका है।

वर्तमान में आयुष बीटीसी के छात्र हैं और अपने गाँव में गरीब व दलित बच्चों को नि:शुल्क शिक्षा प्रदान करते हैं।

वे ग्रामीणों की मदद के लिए हमेशा तैयार रहते हैं, चाहे सरकारी योजनाओं में सहायता हो या शिक्षा से जुड़े मामले।

गाँव के लोग और विद्यार्थी उन्हें एक नेता के रूप में देखने लगे हैं।

आयुष की यात्रा साबित करती है कि चाहे संघर्ष कितना भी कठिन क्यों न हो, साहस और शिक्षा हर बाधा को तोड़कर व्यक्ति को समाज का सच्चा नेता बना सकते हैं।`,
    },
  },
  {
    id: 5,
    name: { en: "Vineeta and Pooja", hi: "विनीता और पूजा" },
    location: { en: "Bajida, Uttar Pradesh", hi: "बाजिदा, उत्तर प्रदेश" },
    brief: {
      en: "Two women deceived by the same husband stood together, stopped another marriage, and pursued justice with DDJC's legal support.",
      hi: "एक ही पति द्वारा ठगी गई दो महिलाओं ने साथ खड़े होकर दूसरी शादी रोकी और DDJC की कानूनी मदद से न्याय की लड़ाई लड़ी।",
    },
    detail: {
      en: `In Indian society, women frequently become victims of injustice and exploitation. When Dalit women experience deception and cruelty, their suffering becomes even more complicated.

This is the story of Vineeta and Pooja, two courageous women who refused to surrender despite facing betrayal by their husband and the harsh realities of society.

Vineeta's Pain: A Broken Marriage and False Rumours

Vineeta, a resident of Bajida village, got married in 2010.

For the first few months, everything seemed normal. However, her in-laws soon began harassing her, and her husband started physically assaulting her over minor issues.

She silently endured this treatment for months, even after the birth of her first daughter.

A few years later, after the birth of their second daughter, her husband brutally assaulted her and forced her out of the house.

When she informed her parents, her father brought her back to her parental home.

Vineeta repeatedly tried to reconcile with her husband, but he and his family refused to accept her.

During this period, her husband spread a shocking false rumour in society, claiming that Vineeta had died.

Using this false story as an excuse, he married another woman, despite already having two daughters with Vineeta.

The second bride was Pooja.

Pooja's Struggle: From Hope to Betrayal

Pooja also entered the marriage with hopes of a happy married life.

However, she soon discovered her husband's true nature.

He had not only deceived Vineeta but also betrayed Pooja. After the birth of their daughter, he abandoned Pooja and began preparing for a third marriage.

The day of the third wedding arrived. Wedding music was playing, and relatives were celebrating.

Suddenly, Vineeta and Pooja arrived at the venue. Both women, the first and second wives, courageously intervened and stopped the wedding in the village of Basob.

The incident received widespread attention in newspapers and other media.

However, even after this public embarrassment, the man did not stop. He reportedly attempted to arrange a fourth marriage.

Meanwhile, Vineeta and Pooja continued fighting for justice.

They approached commissions, police stations and courts, but received no satisfactory response.

In desperation, Vineeta even poured petrol on herself in front of the District Magistrate as a form of protest.

Both women also approached the Chief Minister seeking justice, but were disappointed there as well.

The Fight for Justice and DDJC's Support

Their difficulties did not end there.

Their husband and his family members allegedly filed several false cases against Vineeta and Pooja to silence them and humiliate them in society.

However, these women refused to give up.

During a community meeting in Bajida village, the DDJC team learned about their situation.

The team visited their home, listened to their experiences and provided counselling.

After learning about the organisation's work, Vineeta and Pooja visited the DDJC office.

Since then, DDJC and its legal team have been continuously working towards securing justice for them.

The organisation has provided legal assistance and helped amplify their voices in society.

Eventually, Vineeta and Pooja once again approached the Chief Minister with their grievances.

Reaching the Chief Minister with their concerns was not easy, but these courageous women refused to surrender.

A Symbol of Struggle and Hope

This is not merely a story about a husband's betrayal.

It is a testimony to the struggles of Dalit women who continue to fight for their rights and dignity despite humiliation, deception and false legal cases.

The story of Vineeta and Pooja forces society to question how long women will continue to face such exploitation and when they will receive the dignity and protection they deserve.

Their struggle represents not just two women but countless Dalit women who stand against injustice.

Their courage teaches us that even when truth takes time to emerge, the fight for justice must never stop.`,
      hi: `भारतीय समाज में महिलाएँ अक्सर अन्याय और शोषण की शिकार होती हैं। जब दलित महिलाएँ धोखे और क्रूरता का सामना करती हैं, तो उनका दुख और भी जटिल हो जाता है।

यह विनीता और पूजा की कहानी है — दो साहसी महिलाओं की, जिन्होंने पति के विश्वासघात और समाज की कठोर सच्चाइयों के बावजूद हार नहीं मानी।

विनीता का दर्द: टूटा विवाह और झूठी अफवाहें

बाजिदा गाँव की रहने वाली विनीता की शादी 2010 में हुई थी।

शुरुआती कुछ महीने सब सामान्य लगा। लेकिन जल्द ही ससुराल वालों ने उन्हें परेशान करना शुरू कर दिया और पति छोटी-छोटी बातों पर मारपीट करने लगा।

पहली बेटी के जन्म के बाद भी विनीता ने महीनों तक यह सब चुपचाप सहा।

कुछ वर्षों बाद, दूसरी बेटी के जन्म के बाद, उनके पति ने उनके साथ बुरी तरह मारपीट की और उन्हें घर से निकाल दिया।

जब उन्होंने अपने माता-पिता को बताया, तो पिता उन्हें मायके ले आए।

विनीता ने कई बार पति के साथ सुलह की कोशिश की, लेकिन पति और उसके परिवार ने उन्हें स्वीकार करने से इनकार कर दिया।

इसी दौरान पति ने समाज में एक चौंकाने वाली झूठी अफवाह फैलाई कि विनीता की मृत्यु हो गई है।

इस झूठी कहानी का बहाना बनाकर उसने दूसरी शादी कर ली, जबकि विनीता से उसकी दो बेटियाँ पहले से थीं।

दूसरी दुल्हन पूजा थी।

पूजा का संघर्ष: उम्मीद से विश्वासघात तक

पूजा भी सुखद वैवाहिक जीवन की उम्मीद के साथ शादी में आई थीं।

लेकिन जल्द ही उन्हें अपने पति का असली रूप पता चल गया।

उसने न केवल विनीता को धोखा दिया था, बल्कि पूजा के साथ भी विश्वासघात किया। बेटी के जन्म के बाद उसने पूजा को छोड़ दिया और तीसरी शादी की तैयारी शुरू कर दी।

तीसरी शादी का दिन आया। शहनाइयाँ बज रही थीं और रिश्तेदार जश्न मना रहे थे।

अचानक विनीता और पूजा शादी के स्थल पर पहुँच गईं। पहली और दूसरी पत्नी — दोनों महिलाओं ने साहस दिखाते हुए बसोब गाँव में शादी रुकवा दी।

इस घटना को समाचार पत्रों और अन्य मीडिया में व्यापक कवरेज मिला।

लेकिन इस सार्वजनिक शर्मिंदगी के बाद भी वह व्यक्ति नहीं रुका। कथित तौर पर उसने चौथी शादी की कोशिश भी की।

इस बीच विनीता और पूजा न्याय के लिए लड़ती रहीं।

वे आयोगों, थानों और न्यायालयों तक गईं, लेकिन उन्हें संतोषजनक प्रतिक्रिया नहीं मिली।

निराशा में विनीता ने विरोध स्वरूप जिलाधिकारी के सामने खुद पर पेट्रोल डाल लिया।

दोनों महिलाओं ने न्याय के लिए मुख्यमंत्री से भी गुहार लगाई, लेकिन वहाँ भी निराशा हाथ लगी।

न्याय की लड़ाई और DDJC का सहयोग

उनकी मुश्किलें यहीं खत्म नहीं हुईं।

पति और उसके परिवार के सदस्यों ने कथित तौर पर विनीता और पूजा को चुप कराने और समाज में अपमानित करने के लिए उनके खिलाफ कई झूठे मामले दर्ज कराए।

लेकिन इन महिलाओं ने हार नहीं मानी।

बाजिदा गाँव में एक सामुदायिक बैठक के दौरान DDJC टीम को उनकी स्थिति की जानकारी मिली।

टीम उनके घर गई, उनकी बातें सुनीं और परामर्श दिया।

संस्था के काम के बारे में जानने के बाद विनीता और पूजा DDJC कार्यालय पहुँचीं।

तब से DDJC और उसकी कानूनी टीम उनके लिए न्याय सुनिश्चित करने की दिशा में लगातार काम कर रही है।

संस्था ने उन्हें कानूनी सहायता दी और समाज में उनकी आवाज़ को मजबूत करने में मदद की।

अंततः विनीता और पूजा ने एक बार फिर अपनी शिकायतों के साथ मुख्यमंत्री से संपर्क किया।

मुख्यमंत्री तक अपनी बात पहुँचाना आसान नहीं था, लेकिन इन साहसी महिलाओं ने हार नहीं मानी।

संघर्ष और आशा का प्रतीक

यह केवल एक पति के विश्वासघात की कहानी नहीं है।

यह उन दलित महिलाओं के संघर्ष की गवाही है जो अपमान, धोखे और झूठे मुकदमों के बावजूद अपने अधिकारों और गरिमा के लिए लड़ती रहती हैं।

विनीता और पूजा की कहानी समाज से सवाल करती है कि महिलाएँ कब तक ऐसे शोषण का सामना करती रहेंगी और उन्हें वह गरिमा व सुरक्षा कब मिलेगी जिसकी वे हकदार हैं।

उनका संघर्ष केवल दो महिलाओं का नहीं, बल्कि अन्याय के खिलाफ खड़ी अनगिनत दलित महिलाओं का प्रतिनिधित्व करता है।

उनका साहस सिखाता है कि सच सामने आने में समय लग सकता है, लेकिन न्याय की लड़ाई कभी बंद नहीं होनी चाहिए।`,
    },
  },
  {
    id: 6,
    name: { en: "Shri Ram", hi: "श्री राम" },
    location: { en: "Jalaun, Uttar Pradesh", hi: "जालौन, उत्तर प्रदेश" },
    brief: {
      en: "After a caste-based assault and a forced compromise, Shri Ram faced a false case; DDJC helped him defend his rights.",
      hi: "जातिगत हमले और दबाव में समझौते के बाद श्री राम पर झूठा मामला बना; DDJC ने उनके अधिकारों की रक्षा में मदद की।",
    },
    detail: {
      en: `This is the story of Shri Ram, who faced not only physical violence following a minor incident but also a false legal case when he attempted to seek justice.

A Minor Incident Turns into a Serious Dispute

My name is Shri Ram.

One day, I was grazing my livestock near my village when one of my buffaloes accidentally entered the field of Balak Ram Kushwaha.

Seeing this, Balak Ram became furious and began abusing me. He used offensive language against my mother and sister and also made caste-based remarks, saying:

"You Chamars bring your animals here."

He then attacked me with an axe, striking my arm and causing a serious injury.

I immediately approached the police and registered a complaint against Balak Ram under the SC/ST Act.

Pressure and a Forced Compromise

After the case was registered, Balak Ram became worried and started pressuring me to compromise.

He threatened me, saying:

"If you do not compromise and I have to go to jail, I will commit suicide. You will then be held responsible for my death and spend your entire life in prison."

Frightened by his threats, I eventually agreed to a compromise.

However, he misused this compromise.

He approached the Allahabad High Court and filed a false case against me, accusing me of fraud and misuse of the SC/ST Act.

The Role of the Dalit Dignity and Justice Centre

When I became trapped in this false case and could see no way forward, Pradeep Kumar, the Tehsil Coordinator from Orai, registered my case with the Dalit Dignity and Justice Centre (DDJC).

The centre's team carefully investigated my case.

Pradeep Kumar accompanied me to the Allahabad High Court. There, he helped document my photographs and fingerprints so that the legal team could properly present my case and defend me against the false allegations.

Additionally, I had received compensation of ₹1.5 lakh under the SC/ST Act. At one point, I considered returning the amount, but with DDJC's assistance, I was able to avoid having to deposit the compensation back.

Conclusion

Shri Ram's story demonstrates that vulnerable and oppressed people do not suffer only from physical violence. Even when they fight for justice, they may face false allegations, threats and complicated legal proceedings.

However, with the support of organisations such as the Dalit Dignity and Justice Centre, they can continue fighting for their rights and live with dignity.

This story highlights that caste-based discrimination and injustice still exist in society and that continuous efforts are necessary to challenge them.`,
      hi: `यह श्री राम की कहानी है, जिन्हें एक छोटी घटना के बाद न केवल शारीरिक हिंसा का सामना करना पड़ा, बल्कि न्याय माँगने पर एक झूठे कानूनी मामले में भी फँसना पड़ा।

एक छोटी घटना बड़ा विवाद बनी

मेरा नाम श्री राम है।

एक दिन मैं अपने गाँव के पास मवेशी चरा रहा था, तभी मेरी एक भैंस गलती से बालक राम कुशवाहा के खेत में चली गई।

यह देखकर बालक राम गुस्से में आ गया और मुझे गालियाँ देने लगा। उसने मेरी माँ और बहन के खिलाफ अपशब्द कहे और जातिसूचक टिप्पणी भी की:

"तुम चमार लोग यहाँ अपने जानवर लाते हो।"

इसके बाद उसने कुल्हाड़ी से मुझ पर हमला कर दिया, जिससे मेरे हाथ में गंभीर चोट आई।

मैं तुरंत पुलिस के पास गया और बालक राम के खिलाफ एससी/एसटी अधिनियम के तहत शिकायत दर्ज कराई।

दबाव और मजबूरी में समझौता

मामला दर्ज होने के बाद बालक राम घबरा गया और मुझ पर समझौते का दबाव बनाने लगा।

उसने मुझे धमकी दी:

"अगर तुम समझौता नहीं करोगे और मुझे जेल जाना पड़ा, तो मैं आत्महत्या कर लूँगा। तब मेरी मौत की जिम्मेदारी तुम्हारे ऊपर आएगी और तुम पूरी जिंदगी जेल में बिताओगे।"

उसकी धमकियों से डरकर मैंने अंततः समझौता कर लिया।

लेकिन उसने इस समझौते का गलत फायदा उठाया।

वह इलाहाबाद उच्च न्यायालय पहुँचा और मेरे खिलाफ एक झूठा मामला दायर कर दिया, जिसमें मुझ पर धोखाधड़ी और एससी/एसटी अधिनियम के दुरुपयोग का आरोप लगाया।

दलित डिग्निटी एंड जस्टिस सेंटर की भूमिका

जब मैं इस झूठे मामले में फँस गया और मुझे कोई रास्ता नहीं दिख रहा था, तब उरई के तहसील समन्वयक प्रदीप कुमार ने मेरा मामला दलित डिग्निटी एंड जस्टिस सेंटर (DDJC) में दर्ज कराया।

संस्था की टीम ने मेरे मामले की सावधानीपूर्वक जाँच की।

प्रदीप कुमार मेरे साथ इलाहाबाद उच्च न्यायालय गए। वहाँ उन्होंने मेरी तस्वीरें और फिंगरप्रिंट दर्ज कराने में मदद की, ताकि कानूनी टीम मेरे मामले को सही तरीके से प्रस्तुत कर सके और झूठे आरोपों से मेरा बचाव हो सके।

इसके अलावा, मुझे एससी/एसटी अधिनियम के तहत ₹1.5 लाख का मुआवजा मिला था। एक समय पर मैंने वह राशि वापस करने के बारे में सोचा, लेकिन DDJC की सहायता से मुझे मुआवजा वापस जमा करने की स्थिति से बचने में मदद मिली।

निष्कर्ष

श्री राम की कहानी दिखाती है कि कमजोर और उत्पीड़ित लोग केवल शारीरिक हिंसा का ही सामना नहीं करते। न्याय के लिए लड़ने पर भी उन्हें झूठे आरोपों, धमकियों और जटिल कानूनी प्रक्रियाओं का सामना करना पड़ सकता है।

लेकिन दलित डिग्निटी एंड जस्टिस सेंटर जैसे संगठनों के सहयोग से वे अपने अधिकारों के लिए लड़ना जारी रख सकते हैं और गरिमा के साथ जीवन जी सकते हैं।

यह कहानी बताती है कि समाज में जातिगत भेदभाव और अन्याय अभी भी मौजूद हैं और उन्हें चुनौती देने के लिए निरंतर प्रयास जरूरी हैं।`,
    },
  },
  {
    id: 7,
    name: { en: "Sanjana Devi", hi: "संजना देवी" },
    location: { en: "Kaith, Jalaun, Uttar Pradesh", hi: "कैथ, जालौन, उत्तर प्रदेश" },
    brief: {
      en: "Blackmailed and exploited by a neighbour, Sanjana received DDJC's support to file an FIR; the accused was arrested.",
      hi: "पड़ोसी द्वारा ब्लैकमेल और शोषण की शिकार संजना को DDJC की मदद से FIR दर्ज हुई; आरोपी गिरफ्तार हुआ।",
    },
    detail: {
      en: `This is the story of Sanjana Devi, a resident of Kaith village in Jalaun district.

She lived with her husband, Vijay Kumar, in a rented house in Chukhival locality of Jalaun.

Pappu alias Pushpendra Kumar Yagnik was also a tenant in the same house, which led to their acquaintance.

Approximately a year earlier, when Sanjana's husband was away from home, Pappu frequently attempted to touch her with inappropriate intentions.

Whenever Sanjana protested, he would remain silent and leave.

One day, when her husband had gone to work, Pappu visited her home and brought some food items.

He allegedly mixed an intoxicating substance into the food, causing Sanjana to lose consciousness.

During this time, Pappu secretly took some objectionable and obscene photographs of her.

When Sanjana regained consciousness and discovered what had happened, she confronted him and warned that she would complain to her husband.

Pappu threatened her.

He told her that her husband sold goods from a roadside cart at Jalaun crossing and threatened to circulate her photographs online, destroying her family life.

Terrified by these threats, Sanjana did not tell her husband anything.

Taking advantage of her fear, Pappu allegedly blackmailed and sexually exploited her several times.

When Sanjana finally gathered the courage to resist again, Pappu abused her using caste-based language and threatened to kill her before leaving.

After some time, Pappu demanded ₹5 lakh from Sanjana and threatened to circulate her videos if she failed to pay.

Sanjana did not have such a large amount of money and refused to pay.

Following her refusal, Pappu circulated her videos on several platforms.

When Sanjana and her husband discovered this, Vijay Kumar confronted Pappu.

Pappu shamelessly responded that he would continue circulating the videos until he received ₹5 lakh.

He also boasted about his influence and claimed that nobody could harm him because he was a powerful and dangerous person.

Sanjana feared that he might carry out a serious attack against her or her family.

DDJC's Support and Steps Towards Justice

When the DDJC team learned about the entire incident, they immediately met Sanjana Devi.

After listening to her complete account, the team helped prepare a detailed complaint and initiated legal proceedings.

Through the team's efforts, an FIR was registered against Pappu, and the accused was arrested and sent to jail.

Present Situation and Hope for Justice

Today, Sanjana feels safer than before.

Her case is currently being heard in court, and her statement is expected to be recorded soon.

The DDJC team has assured her that it will continue supporting her throughout the legal proceedings until justice is delivered and the accused is punished according to law.

This incident demonstrates how timely legal assistance and social support can play an important role in helping vulnerable individuals obtain justice.`,
      hi: `यह जालौन जिले के कैथ गाँव की रहने वाली संजना देवी की कहानी है।

वे अपने पति विजय कुमार के साथ जालौन के चुखीवाल इलाके में एक किराए के मकान में रहती थीं।

पप्पू उर्फ पुष्पेंद्र कुमार याज्ञिक भी उसी मकान में किराएदार था, जिससे उनका परिचय हुआ।

लगभग एक साल पहले, जब संजना के पति घर से बाहर होते थे, पप्पू अक्सर गलत इरादे से उन्हें छूने की कोशिश करता था।

जब भी संजना विरोध करतीं, वह चुप रहकर चला जाता।

एक दिन, जब उनके पति काम पर गए थे, पप्पू उनके घर आया और कुछ खाद्य सामग्री लाया।

आरोप है कि उसने खाने में नशीला पदार्थ मिला दिया, जिससे संजना बेहोश हो गईं।

इसी दौरान पप्पू ने चुपके से उनकी कुछ आपत्तिजनक और अश्लील तस्वीरें ले लीं।

जब संजना को होश आया और उन्हें पता चला कि क्या हुआ है, तो उन्होंने पप्पू का सामना किया और चेतावनी दी कि वे अपने पति को शिकायत करेंगी।

पप्पू ने उन्हें धमकाया।

उसने कहा कि उनके पति जालौन चौराहे पर ठेले से सामान बेचते हैं और धमकी दी कि वह उनकी तस्वीरें ऑनलाइन फैला देगा, जिससे उनका पारिवारिक जीवन बर्बाद हो जाएगा।

इन धमकियों से डरकर संजना ने अपने पति को कुछ नहीं बताया।

उनके डर का फायदा उठाकर पप्पू ने कथित तौर पर कई बार ब्लैकमेल कर उनका यौन शोषण किया।

जब संजना ने आखिरकार फिर से विरोध करने की हिम्मत जुटाई, तो पप्पू ने जातिसूचक गालियाँ दीं और उन्हें जान से मारने की धमकी देकर चला गया।

कुछ समय बाद पप्पू ने संजना से ₹5 लाख की माँग की और पैसे न देने पर वीडियो प्रसारित करने की धमकी दी।

संजना के पास इतनी बड़ी रकम नहीं थी, इसलिए उन्होंने इनकार कर दिया।

इनकार के बाद पप्पू ने उनके वीडियो कई प्लेटफॉर्म पर फैला दिए।

जब संजना और उनके पति को इसकी जानकारी हुई, तो विजय कुमार ने पप्पू का सामना किया।

पप्पू ने बेशर्मी से कहा कि जब तक उसे ₹5 लाख नहीं मिलेंगे, वह वीडियो फैलाता रहेगा।

उसने अपने रसूख का भी दावा किया और कहा कि कोई उसका कुछ नहीं बिगाड़ सकता क्योंकि वह एक प्रभावशाली और खतरनाक व्यक्ति है।

संजना को डर था कि वह उनके या उनके परिवार के खिलाफ कोई गंभीर हमला कर सकता है।

DDJC का सहयोग और न्याय की दिशा में कदम

जब DDJC टीम को पूरी घटना की जानकारी मिली, तो टीम ने तुरंत संजना देवी से मुलाकात की।

उनकी पूरी बात सुनने के बाद टीम ने विस्तृत शिकायत तैयार करने में मदद की और कानूनी प्रक्रिया शुरू कराई।

टीम के प्रयासों से पप्पू के खिलाफ एफआईआर दर्ज हुई और आरोपी को गिरफ्तार कर जेल भेजा गया।

वर्तमान स्थिति और न्याय की उम्मीद

आज संजना पहले की तुलना में अधिक सुरक्षित महसूस करती हैं।

उनका मामला वर्तमान में न्यायालय में चल रहा है और जल्द ही उनका बयान दर्ज होने की उम्मीद है।

DDJC टीम ने उन्हें आश्वासन दिया है कि जब तक न्याय नहीं मिल जाता और आरोपी को कानून के अनुसार सजा नहीं मिल जाती, तब तक वह कानूनी प्रक्रिया में उनका साथ देती रहेगी।

यह घटना दिखाती है कि समय पर कानूनी सहायता और सामाजिक सहयोग कमजोर व्यक्तियों को न्याय दिलाने में कितनी महत्वपूर्ण भूमिका निभा सकते हैं।`,
    },
  },
  {
    id: 8,
    name: { en: "Guddi Devi", hi: "गुड्डी देवी" },
    location: { en: "Usargaon/Kadaura, Jalaun, Uttar Pradesh", hi: "उसारगांव/कदौरा, जालौन, उत्तर प्रदेश" },
    brief: {
      en: "After years of hardship and a sexual assault, Guddi refused to compromise; DDJC helped ensure the accused was arrested.",
      hi: "वर्षों की कठिनाइयों और यौन उत्पीड़न के बाद गुड्डी ने समझौते से इनकार किया; DDJC की मदद से आरोपी गिरफ्तार हुआ।",
    },
    detail: {
      en: `This is the story of Guddi Devi, who was born in 1989 in Usargaon village, Jalaun district, Uttar Pradesh.

She belongs to the Chamar community, and her family faced numerous social difficulties because of caste-based discrimination.

Her father, Shri Mannilal, and mother, Smt. Gulabi Devi, eventually decided to leave their village due to poverty and discrimination. They settled in Chandausi, a small village in Kadaura.

Born into a poor family, Guddi spent her childhood working hard and performing labour.

When she was 16 years old, her parents arranged her marriage with Charan Singh, a resident of Amita village.

Charan Singh did not work, but his family's agricultural background influenced the marriage decision.

Initially, her in-laws supported the household expenses. However, they soon stopped providing financial assistance.

Whenever Guddi asked her husband to work, he responded with arguments and fights.

Six months after their marriage, Guddi became pregnant. Her husband started drinking alcohol and physically assaulting her.

Over time, Guddi gave birth to three children, but her husband's behaviour did not improve.

Whenever she became pregnant, he would leave her at her parental home.

During her fourth pregnancy, the child died in the womb. Following this incident, her husband and in-laws brutally assaulted her.

Guddi eventually began working as a labourer to support her five children, while her husband spent his earnings on alcohol and gambling.

Finally, she decided to leave him.

A New Beginning and Another Period of Struggle

To support her children, Guddi began working as a daily-wage labourer during the day and at a sand ghat at night.

The owner of the ghat where she worked was Devendra, a Brahmin.

Devendra's brother and sisters began accusing him of keeping Guddi as his partner.

One day, Devendra's brother Nagendra, his sisters Santosh and Preeti, along with some villagers named Gullu and Chatur Ram, stopped Guddi on the road.

They assaulted her and allegedly attempted to sexually assault her.

Guddi somehow escaped and reached home.

However, her family sent her back to her marital home, where her husband refused to accept her and threatened to divorce her.

With no other option, Guddi called Devendra.

Devendra apologised for the difficulties she had faced because of him and promised to support her and her children.

They began living together, and Devendra also married Guddi near the Ganga River.

After this marriage, Devendra's family threatened to kill him for marrying a woman from a lower caste.

During this period, Guddi gave birth to a son. Unfortunately, the child died after one month.

Devendra accused Guddi of killing the child, assaulted her severely and left her. However, Guddi later persuaded him to return.

Some time later, her first husband died in a road accident.

Eventually, Guddi and Devendra had two daughters.

Sexual Assault and the Fight for Justice

One day, while Guddi was grazing her goats in a field, a young man from the village named Sibbu Rajput approached her and began abusing her.

When Guddi resisted, he allegedly raped her and threatened to kill her husband and children if she reported the incident.

Instead of remaining silent, Guddi decided to tell her husband everything when she returned home.

They immediately approached the police station, but the police refused to register her FIR.

After submitting applications at several places without receiving any response, Guddi organised a protest, following which her complaint was finally registered.

During this period, the DDJC team visited her and listened to her story.

The team promised to support her, which gave Guddi renewed confidence.

Although the accused and his family continued pressuring her to compromise, Guddi firmly refused.

Hope for Justice and Present Situation

Guddi felt that the accused was still moving freely and threatening her.

She visited the DDJC office and explained her problems to Kuldeep Sir.

He helped register her complaint at the Public Grievance Redressal Centre.

Following this intervention, the accused, Sibbu Rajput, was arrested and sent to jail.

On November 22, 2024, a bail application was filed before the SC/ST Court. The court sought a report from the police station and fixed the next hearing date.

Guddi Devi continues to refuse any compromise.

She remains determined to fight for justice, regardless of the difficulties she faces.

Her courage and DDJC's support demonstrate that even the most marginalized people can fight for justice and dignity.`,
      hi: `यह गुड्डी देवी की कहानी है, जिनका जन्म 1989 में उत्तर प्रदेश के जालौन जिले के उसारगांव गाँव में हुआ था।

वे चमार समुदाय से हैं और उनके परिवार को जातिगत भेदभाव के कारण अनेक सामाजिक कठिनाइयों का सामना करना पड़ा।

उनके पिता श्री मन्नीलाल और माता श्रीमती गुलाबी देवी ने अंततः गरीबी और भेदभाव के कारण अपना गाँव छोड़ने का निर्णय लिया। वे कदौरा के एक छोटे गाँव चंदौसी में बस गए।

गरीब परिवार में जन्मी गुड्डी ने बचपन मेहनत और मजदूरी करते हुए बिताया।

जब वे 16 वर्ष की थीं, तब उनके माता-पिता ने उनकी शादी अमिता गाँव के रहने वाले चरण सिंह से कर दी।

चरण सिंह काम नहीं करता था, लेकिन उसके परिवार की कृषि पृष्ठभूमि ने शादी के निर्णय को प्रभावित किया।

शुरुआत में ससुराल वालों ने घर का खर्च उठाया, लेकिन जल्द ही उन्होंने आर्थिक सहायता देना बंद कर दिया।

जब भी गुड्डी अपने पति से काम करने को कहतीं, वह झगड़ा और विवाद करता।

शादी के छह महीने बाद गुड्डी गर्भवती हुईं। उनके पति ने शराब पीना और उनके साथ मारपीट करना शुरू कर दिया।

समय के साथ गुड्डी ने तीन बच्चों को जन्म दिया, लेकिन पति का व्यवहार नहीं सुधरा।

जब भी वे गर्भवती होतीं, वह उन्हें मायके छोड़ आता।

चौथी गर्भावस्था के दौरान बच्चा गर्भ में ही मर गया। इस घटना के बाद पति और ससुराल वालों ने उनके साथ बुरी तरह मारपीट की।

गुड्डी ने अंततः अपने पाँच बच्चों का पालन-पोषण करने के लिए मजदूरी शुरू कर दी, जबकि उनके पति अपनी कमाई शराब और जुए में खर्च करते थे।

आखिरकार उन्होंने उसे छोड़ने का फैसला किया।

नई शुरुआत और संघर्ष का एक और दौर

बच्चों का भरण-पोषण करने के लिए गुड्डी ने दिन में दिहाड़ी मजदूरी और रात में रेत घाट पर काम शुरू किया।

जिस घाट पर वे काम करती थीं, उसका मालिक देवेंद्र नाम का एक ब्राह्मण था।

देवेंद्र के भाई और बहनों ने उस पर गुड्डी को अपनी साथी के रूप में रखने का आरोप लगाना शुरू कर दिया।

एक दिन देवेंद्र के भाई नागेंद्र, उसकी बहनें संतोष और प्रीति, तथा गाँव के कुछ लोग — गुल्लू और चतुर राम — ने गुड्डी को रास्ते में रोक लिया।

उन्होंने गुड्डी के साथ मारपीट की और कथित तौर पर यौन उत्पीड़न का प्रयास किया।

गुड्डी किसी तरह बचकर घर पहुँचीं।

लेकिन उनके परिवार ने उन्हें वापस ससुराल भेज दिया, जहाँ पति ने उन्हें स्वीकार करने से इनकार कर दिया और तलाक की धमकी दी।

कोई और विकल्प न होने पर गुड्डी ने देवेंद्र को फोन किया।

देवेंद्र ने उनके साथ हुई परेशानियों के लिए माफी माँगी और गुड्डी तथा उनके बच्चों का साथ देने का वादा किया।

वे साथ रहने लगे और देवेंद्र ने गंगा नदी के पास गुड्डी से विवाह भी किया।

इस विवाह के बाद देवेंद्र के परिवार ने निचली जाति की महिला से शादी करने के कारण उसे जान से मारने की धमकी दी।

इसी दौरान गुड्डी ने एक बेटे को जन्म दिया। दुर्भाग्य से एक महीने बाद बच्चे की मृत्यु हो गई।

देवेंद्र ने गुड्डी पर बच्चे को मारने का आरोप लगाया, उनके साथ बुरी तरह मारपीट की और उन्हें छोड़कर चला गया। हालांकि, बाद में गुड्डी ने उसे वापस लौटने के लिए मना लिया।

कुछ समय बाद गुड्डी के पहले पति की सड़क दुर्घटना में मृत्यु हो गई।

अंततः गुड्डी और देवेंद्र की दो बेटियाँ हुईं।

यौन उत्पीड़न और न्याय की लड़ाई

एक दिन, जब गुड्डी खेत में अपनी बकरियाँ चरा रही थीं, तभी गाँव का एक युवक सिब्बू राजपूत उनके पास आया और उन्हें गालियाँ देने लगा।

जब गुड्डी ने विरोध किया, तो उसने कथित तौर पर उनके साथ बलात्कार किया और धमकी दी कि अगर उन्होंने घटना की शिकायत की तो वह उनके पति और बच्चों को मार देगा।

चुप रहने के बजाय गुड्डी ने घर लौटकर अपने पति को सब कुछ बताने का फैसला किया।

वे तुरंत थाने गए, लेकिन पुलिस ने एफआईआर दर्ज करने से इनकार कर दिया।

कई जगह आवेदन देने के बाद भी जब कोई सुनवाई नहीं हुई, तो गुड्डी ने विरोध प्रदर्शन किया, जिसके बाद उनकी शिकायत अंततः दर्ज हुई।

इसी दौरान DDJC टीम उनसे मिली और उनकी कहानी सुनी।

टीम ने उन्हें सहयोग का आश्वासन दिया, जिससे गुड्डी का आत्मविश्वास फिर से बढ़ा।

हालाँकि आरोपी और उसका परिवार लगातार उन पर समझौते का दबाव बनाता रहा, लेकिन गुड्डी ने स्पष्ट इनकार कर दिया।

न्याय की उम्मीद और वर्तमान स्थिति

गुड्डी को लग रहा था कि आरोपी अभी भी खुलेआम घूम रहा है और उन्हें धमका रहा है।

वे DDJC कार्यालय गईं और अपनी समस्याएँ कुलदीप सर को बताईं।

उन्होंने लोक शिकायत निवारण केंद्र में उनकी शिकायत दर्ज कराने में मदद की।

इस हस्तक्षेप के बाद आरोपी सिब्बू राजपूत को गिरफ्तार कर जेल भेजा गया।

22 नवंबर 2024 को एससी/एसटी न्यायालय में जमानत अर्जी दाखिल हुई। न्यायालय ने थाने से रिपोर्ट माँगी और अगली सुनवाई की तारीख तय की।

गुड्डी देवी ने किसी भी समझौते से इनकार किया है।

वे कठिनाइयों के बावजूद न्याय के लिए लड़ने का संकल्प लिए हुए हैं।

उनका साहस और DDJC का सहयोग दिखाता है कि सबसे हाशिए पर खड़े लोग भी न्याय और गरिमा के लिए लड़ सकते हैं।`,
    },
  },
  {
    id: 9,
    name: { en: "Haripura's Unfulfilled Promise", hi: "हरिपुरा का अधूरा संकल्प" },
    location: { en: "Haripura, Uttar Pradesh", hi: "हरिपुरा, उत्तर प्रदेश" },
    brief: {
      en: "For thirty years, Babasaheb Ambedkar's statue in Haripura has awaited a dignified installation site despite repeated promises.",
      hi: "तीस वर्षों से हरिपुरा में बाबासाहेब अंबेडकर की प्रतिमा सम्मानजनक स्थान की प्रतीक्षा में है, बावजूद बार-बार किए गए वादों के।",
    },
    detail: {
      en: `In the dusty village of Haripura lies a story that has grown deeper with every passing year.

It is the story of a statue of Babasaheb Dr. Bhimrao Ambedkar, which was brought to the village nearly thirty years ago but is still waiting for a dignified place of installation.

Three decades ago, some enthusiastic young people and elders of the village dreamed of installing Babasaheb's statue in the centre of the village or at another prominent location.

They wanted every child, woman and young person to see the statue and draw inspiration from it.

The statue was not merely a structure. It represented justice, equality and self-respect.

Unfortunately, this dream remains unfulfilled.

Thirty Years of Neglect

The statue was temporarily placed near the village well with the expectation that the Gram Panchayat or village head would soon identify a suitable location.

However, days turned into months, months into years, and eventually three decades passed.

During this period, several village heads changed, Panchayat meetings were held and promises were made.

Yet the statue never moved from its temporary location.

Today, it continues to stand near the well as a silent witness to the village's indifference and administrative negligence.

When children pass by on their way to school, they fold their hands in respect.

Elderly people bow their heads when they come to collect water.

Women who visit the well every day continue to ask the same question:

"When will the promise of giving Babasaheb the respect he deserves finally be fulfilled?"

This thirty-year wait is not merely a story. It is a reflection of society's neglect and administrative failure.

Babasaheb dedicated his entire life to securing dignity for Dalits, marginalized communities and oppressed people.

His teachings continue to inspire generations.

However, seeing the condition of his statue in Haripura raises an important question:

Have we truly succeeded in building the India that Babasaheb dreamed of?

An Unfulfilled Promise During Every Election

During every election, this issue is raised and big promises are made.

However, once the elections are over, everything is forgotten.

Even today, the statue stands exposed to sunlight, rain and storms.

Its colours may have faded, but the image of Babasaheb remains equally bright and powerful in people's hearts.

This is not merely the story of a statue. It is the story of dignity that has remained unfulfilled for three decades.

The day the children of Haripura see Babasaheb's statue installed at a proper and respectful location, they will gain faith that justice may be delayed but injustice cannot continue forever.

A Call for Collective Action

The time has come for the entire village to come together and take a collective pledge.

We must fulfil this thirty-year-old dream so that future generations do not have to say that the people of Haripura kept Babasaheb standing beside a well but failed to give him the dignified place he deserved.`,
      hi: `धूल भरे गाँव हरिपुरा में एक ऐसी कहानी बसती है, जो हर बीतते साल के साथ और गहरी होती गई है।

यह बाबासाहेब डॉ. भीमराव अंबेडकर की प्रतिमा की कहानी है, जिसे लगभग तीस साल पहले गाँव लाया गया था, लेकिन जो आज भी स्थापित होने के लिए एक सम्मानजनक स्थान की प्रतीक्षा कर रही है।

तीन दशक पहले गाँव के कुछ उत्साही युवाओं और बुजुर्गों ने बाबासाहेब की प्रतिमा को गाँव के केंद्र या किसी अन्य प्रमुख स्थान पर स्थापित करने का सपना देखा था।

वे चाहते थे कि हर बच्चा, महिला और युवा प्रतिमा को देखकर प्रेरणा ले।

यह प्रतिमा केवल एक ढाँचा नहीं थी। यह न्याय, समानता और आत्मसम्मान का प्रतीक थी।

दुर्भाग्य से, यह सपना आज भी अधूरा है।

तीस वर्षों की उपेक्षा

प्रतिमा को अस्थायी रूप से गाँव के कुएँ के पास रखा गया था, इस उम्मीद के साथ कि ग्राम पंचायत या प्रधान जल्द ही कोई उचित स्थान तय करेंगे।

लेकिन दिन महीनों में बदले, महीने वर्षों में, और अंततः तीन दशक बीत गए।

इस दौरान कई प्रधान बदले, पंचायत की बैठकें हुईं और वादे किए गए।

फिर भी प्रतिमा अपने अस्थायी स्थान से नहीं हटी।

आज भी वह कुएँ के पास खड़ी है — गाँव की उदासीनता और प्रशासनिक लापरवाही की मूक गवाह बनकर।

स्कूल जाते समय बच्चे जब उसके पास से गुजरते हैं, तो हाथ जोड़कर प्रणाम करते हैं।

पानी भरने आने वाले बुजुर्ग सिर झुकाते हैं।

जो महिलाएँ हर दिन कुएँ पर आती हैं, वे आज भी वही सवाल पूछती हैं:

"बाबासाहेब को उनका deserved सम्मान देने का वादा आखिर कब पूरा होगा?"

तीस वर्षों का यह इंतज़ार केवल एक कहानी नहीं है। यह समाज की उपेक्षा और प्रशासनिक विफलता का प्रतिबिंब है।

बाबासाहेब ने अपना पूरा जीवन दलितों, हाशिए के समुदायों और उत्पीड़ित लोगों को गरिमा दिलाने के लिए समर्पित कर दिया।

उनकी शिक्षाएँ आज भी पीढ़ियों को प्रेरित करती हैं।

लेकिन हरिपुरा में उनकी प्रतिमा की स्थिति देखकर एक महत्वपूर्ण सवाल उठता है:

क्या हम सच में वह भारत बना पाए हैं जिसका सपना बाबासाहेब ने देखा था?

हर चुनाव में अधूरा वादा

हर चुनाव के दौरान यह मुद्दा उठाया जाता है और बड़े-बड़े वादे किए जाते हैं।

लेकिन चुनाव खत्म होते ही सब कुछ भुला दिया जाता है।

आज भी प्रतिमा धूप, बारिश और तूफानों के सामने खुली खड़ी है।

उसके रंग शायद फीके पड़ गए हों, लेकिन बाबासाहेब की छवि लोगों के दिलों में आज भी उतनी ही उज्ज्वल और सशक्त है।

यह केवल एक प्रतिमा की कहानी नहीं है। यह उस गरिमा की कहानी है जो तीन दशकों से अधूरी पड़ी है।

जिस दिन हरिपुरा के बच्चे बाबासाहेब की प्रतिमा को किसी उचित और सम्मानजनक स्थान पर स्थापित देखेंगे, उन्हें विश्वास होगा कि न्याय में देरी हो सकती है, लेकिन अन्याय हमेशा नहीं रह सकता।

सामूहिक प्रयास का आह्वान

अब समय आ गया है कि पूरा गाँव एकजुट होकर सामूहिक संकल्प ले।

हमें इस तीस साल पुराने सपने को पूरा करना चाहिए, ताकि आने वाली पीढ़ियाँ यह न कहें कि हरिपुरा के लोगों ने बाबासाहेब को कुएँ के पास खड़ा रखा, लेकिन उन्हें वह सम्मानजनक स्थान नहीं दिया जिसके वे हकदार थे।`,
    },
  },
  {
    id: 10,
    name: { en: "Rupali", hi: "रुपाली" },
    location: { en: "Jhansi/Datia", hi: "झाँसी/दतिया" },
    brief: {
      en: "While pursuing domestic violence cases, Rupali faced alleged misconduct by her lawyer and gathered evidence to seek accountability.",
      hi: "घरेलू हिंसा के मामलों की लड़ाई के दौरान रुपाली ने अपने वकील के कथित दुर्व्यवहार का सामना किया और जवाबदेही के लिए सबूत जुटाए।",
    },
    detail: {
      en: `This is the story of Rupali, an educated and courageous woman who completed her bachelor's degree.

She married Sunder, a resident of Ghileni village in Datia district, Madhya Pradesh, on May 1, 2023.

Domestic Violence and the Fight for Justice

Shortly after her marriage, Rupali's life became difficult.

Her husband began physically assaulting her over dowry demands and repeatedly demanded a car.

Rupali informed her parental family, but her in-laws did not take any action.

Unable to tolerate the harassment, she eventually returned to her parental home.

She filed cases against her husband and in-laws under Section 125 of the CrPC, the Domestic Violence Act and Section 498A before the Datia Court.

To pursue these cases, she appointed Advocate Ajay Gurjar, a lawyer practising in the Datia Court.

At that time, Rupali was working in the canteen of Yatharth Hospital in Jhansi and living in the hospital hostel.

She hoped to receive justice through the legal system.

However, even after more than a year, her lawyer had made no significant progress in her cases.

A Shocking Incident of Exploitation

One day, Ajay Gurjar called Rupali and told her that he was standing outside the hospital to discuss her cases.

When Rupali came outside, he asked her to sit in his car.

What he said next was deeply disturbing.

He shamelessly told her that if she wanted to continue fighting her cases and obtain justice, she would have to accompany him to a hotel and establish a friendship with him.

He even said:

"You are not the first girl I will take to a hotel. I have done this with many others."

Courage and Evidence Against Exploitation

After experiencing this horrifying incident, Rupali demonstrated remarkable courage and presence of mind.

She secretly recorded the entire conversation on her mobile phone.

This recording remains available as evidence.

When I learned about the incident, I immediately travelled to Jhansi to meet Rupali.

After meeting her, we both went to Datia and confronted Ajay Gurjar.

I collected Rupali's case file from him and asked:

"Do you take girls to rooms in exchange for providing justice in their cases?"

Hearing my question, he became nervous. He started sweating and left the place without saying anything.

Since the incident took place in the court premises, I did not take any further action against him at that moment.

However, strict action should be taken against him for his alleged misconduct.

The Fight for Justice and Dignity

Rupali's struggle was not limited to fighting against her husband.

She was also fighting against a legal system in which a woman seeking justice was allegedly asked to compromise her dignity.

This incident highlights the multiple challenges women face in society and how certain individuals attempt to exploit their helplessness.

Rupali deserves justice not only against her husband but also against individuals like Ajay Gurjar who allegedly misuse their professional position to exploit vulnerable women.

Strict action is necessary to ensure that no other woman becomes a victim of such exploitation.`,
      hi: `यह रुपाली की कहानी है — एक शिक्षित और साहसी महिला, जिन्होंने स्नातक की पढ़ाई पूरी की है।

उनकी शादी 1 मई 2023 को मध्य प्रदेश के दतिया जिले के घिलेनी गाँव के रहने वाले सुंदर से हुई थी।

घरेलू हिंसा और न्याय की लड़ाई

शादी के कुछ समय बाद ही रुपाली का जीवन कठिन हो गया।

उनके पति ने दहेज की माँग को लेकर उनके साथ मारपीट शुरू कर दी और बार-बार कार की माँग करने लगा।

रुपाली ने अपने मायके वालों को बताया, लेकिन ससुराल वालों ने कोई कार्रवाई नहीं की।

उत्पीड़न सहन न कर पाने पर वे अंततः अपने मायके लौट आईं।

उन्होंने दतिया न्यायालय में पति और ससुराल वालों के खिलाफ सीआरपीसी की धारा 125, घरेलू हिंसा अधिनियम और धारा 498A के तहत मामले दर्ज किए।

इन मामलों को आगे बढ़ाने के लिए उन्होंने दतिया न्यायालय में प्रैक्टिस करने वाले अधिवक्ता अजय गुर्जर को नियुक्त किया।

उस समय रुपाली झाँसी के यथार्थ अस्पताल की कैंटीन में काम कर रही थीं और अस्पताल के हॉस्टल में रह रही थीं।

उन्हें उम्मीद थी कि कानूनी व्यवस्था के माध्यम से उन्हें न्याय मिलेगा।

लेकिन एक साल से अधिक समय बीत जाने के बाद भी उनके वकील ने मामलों में कोई खास प्रगति नहीं की।

शोषण की एक चौंकाने वाली घटना

एक दिन अजय गुर्जर ने रुपाली को फोन किया और बताया कि वह उनके मामलों पर चर्चा करने के लिए अस्पताल के बाहर खड़ा है।

जब रुपाली बाहर आईं, तो उसने उन्हें अपनी कार में बैठने को कहा।

इसके बाद उसने जो कहा, वह बेहद परेशान करने वाला था।

उसने बेशर्मी से कहा कि अगर वे अपने मामले लड़ती रहना चाहती हैं और न्याय पाना चाहती हैं, तो उन्हें उसके साथ होटल चलना होगा और उससे "दोस्ती" करनी होगी।

उसने यहाँ तक कहा:

"तुम पहली लड़की नहीं हो जिसे मैं होटल ले जाऊँगा। मैंने ऐसा कई और लोगों के साथ किया है।"

साहस और शोषण के खिलाफ सबूत

इस भयावह घटना के बाद रुपाली ने remarkable साहस और सूझबूझ दिखाई।

उन्होंने चुपके से पूरी बातचीत अपने मोबाइल फोन में रिकॉर्ड कर ली।

यह रिकॉर्डिंग सबूत के रूप में उपलब्ध है।

जब मुझे इस घटना की जानकारी मिली, तो मैं तुरंत झाँसी गया और रुपाली से मिला।

उनसे मिलने के बाद हम दोनों दतिया गए और अजय गुर्जर का सामना किया।

मैंने उनसे रुपाली की केस फाइल वापस ली और पूछा:

"क्या आप मामलों में न्याय दिलाने के बदले लड़कियों को कमरों में ले जाते हैं?"

मेरा सवाल सुनकर वह घबरा गया। उसे पसीना आने लगा और वह बिना कुछ कहे वहाँ से चला गया।

चूँकि यह घटना न्यायालय परिसर में हुई थी, इसलिए उस समय मैंने उसके खिलाफ कोई और कार्रवाई नहीं की।

हालाँकि, उसके कथित कदाचार के लिए उसके खिलाफ सख्त कार्रवाई होनी चाहिए।

न्याय और गरिमा की लड़ाई

रुपाली का संघर्ष केवल अपने पति के खिलाफ लड़ने तक सीमित नहीं था।

वे एक ऐसी कानूनी व्यवस्था के खिलाफ भी लड़ रही थीं, जिसमें न्याय माँगने वाली महिला से कथित तौर पर अपनी गरिमा से समझौता करने को कहा गया।

यह घटना समाज में महिलाओं के सामने आने वाली कई चुनौतियों को उजागर करती है और दिखाती है कि कैसे कुछ लोग उनकी मजबूरी का फायदा उठाने की कोशिश करते हैं।

रुपाली को न केवल अपने पति के खिलाफ, बल्कि अजय गुर्जर जैसे उन लोगों के खिलाफ भी न्याय मिलना चाहिए जो कथित तौर पर अपने पेशेवर पद का दुरुपयोग कर कमजोर महिलाओं का शोषण करते हैं।

सख्त कार्रवाई जरूरी है ताकि कोई अन्य महिला ऐसे शोषण की शिकार न बने।`,
    },
  },
  {
    id: 11,
    name: { en: "Surjeet", hi: "सुरजीत" },
    location: { en: "Damra, Uttar Pradesh / Indore", hi: "डमरा, उत्तर प्रदेश / इंदौर" },
    brief: {
      en: "A daily-wage labourer working away from family secured an ambulance driver job with DDJC's guidance and returned home.",
      hi: "परिवार से दूर मजदूरी कर रहे सुरजीत को DDJC के मार्गदर्शन से एम्बुलेंस ड्राइवर की नौकरी मिली और वे घर लौट सके।",
    },
    detail: {
      en: `This is the story of Surjeet, a hardworking man from Damra village in Uttar Pradesh.

To support his two daughters and provide for his family, Surjeet was unable to find employment in his village.

As a result, he had to leave his home and move to Indore, where he began working as a daily-wage labourer.

The Difficulties of Living Away from Family

Surjeet had to work far away from his family.

Every day, he performed labour work and used his earnings to support his family.

Life was not easy for him.

He constantly felt sad about being separated from his family and having to work in another city instead of living with them.

An Opportunity That Changed His Life

One day, a significant opportunity came his way.

Anita Ji, the DDJC Tehsil Coordinator, informed him that vacancies were available for drivers in an ambulance service.

This news gave Surjeet a new ray of hope.

He immediately contacted Anita Ji, who advised him to travel to Lucknow for the recruitment process.

Anita Ji helped Surjeet return from Indore and sent him to Lucknow to apply for the ambulance driver position.

Surjeet participated in the recruitment process with dedication and hard work.

Eventually, his efforts paid off, and he secured a job in the ambulance service.

A New Beginning

This was a major achievement for Surjeet.

He no longer had to live away from his family and depend on daily-wage labour.

Today, he has a respectable job and can support his family while living with them.

Surjeet's story demonstrates that timely assistance, combined with personal determination and hard work, can bring meaningful changes to someone's life.

Today, Surjeet is happy with his new job, and his life has improved significantly.`,
      hi: `यह उत्तर प्रदेश के डमरा गाँव के मेहनती व्यक्ति सुरजीत की कहानी है।

अपनी दो बेटियों और परिवार का भरण-पोषण करने के लिए सुरजीत को अपने गाँव में रोजगार नहीं मिल पा रहा था।

इस कारण उन्हें अपना घर छोड़कर इंदौर जाना पड़ा, जहाँ उन्होंने दिहाड़ी मजदूर के रूप में काम शुरू किया।

परिवार से दूर रहने की कठिनाइयाँ

सुरजीत को अपने परिवार से दूर रहकर काम करना पड़ता था।

हर दिन वे मजदूरी करते और अपनी कमाई से परिवार का खर्च चलाते।

उनके लिए जीवन आसान नहीं था।

परिवार से अलग रहने और अपने गाँव में रहने के बजाय दूसरे शहर में काम करने का दुख उन्हें हमेशा रहता था।

एक अवसर जिसने जीवन बदल दिया

एक दिन उनके सामने एक महत्वपूर्ण अवसर आया।

DDJC की तहसील समन्वयक अनीता जी ने उन्हें बताया कि एम्बुलेंस सेवा में ड्राइवरों की भर्ती निकली है।

इस खबर ने सुरजीत को नई उम्मीद दी।

उन्होंने तुरंत अनीता जी से संपर्क किया, जिन्होंने उन्हें भर्ती प्रक्रिया के लिए लखनऊ जाने की सलाह दी।

अनीता जी ने सुरजीत को इंदौर से वापस आने में मदद की और एम्बुलेंस ड्राइवर पद के लिए आवेदन करने लखनऊ भेजा।

सुरजीत ने पूरी लगन और मेहनत के साथ भर्ती प्रक्रिया में भाग लिया।

अंततः उनकी मेहनत रंग लाई और उन्हें एम्बुलेंस सेवा में नौकरी मिल गई।

एक नई शुरुआत

यह सुरजीत के लिए एक बड़ी उपलब्धि थी।

अब उन्हें परिवार से दूर रहकर दिहाड़ी मजदूरी पर निर्भर नहीं रहना पड़ता।

आज उनके पास एक सम्मानजनक नौकरी है और वे अपने परिवार के साथ रहकर उनका भरण-पोषण कर सकते हैं।

सुरजीत की कहानी दिखाती है कि समय पर मिली सहायता, व्यक्तिगत दृढ़ संकल्प और मेहनत के साथ मिलकर किसी के जीवन में सार्थक बदलाव ला सकती है।

आज सुरजीत अपनी नई नौकरी से खुश हैं और उनका जीवन काफी बेहतर हुआ है।`,
    },
  },
  {
    id: 12,
    name: { en: "Kiran Devi", hi: "किरन देवी" },
    location: { en: "Konch/Biriyakhuurd, Jalaun", hi: "कोंच/बिरियाखुर्द, जालौन" },
    brief: {
      en: "After her husband's death, Kiran sought welfare support for her child; DDJC helped her apply for pension and child schemes.",
      hi: "पति की मृत्यु के बाद किरन ने अपने बच्चे के लिए कल्याणकारी सहायता माँगी; DDJC ने पेंशन और बाल योजनाओं के आवेदन में मदद की।",
    },
    detail: {
      en: `This is the story of Kiran Devi, whose life changed completely following a tragic incident.

Kiran Devi was born in Kura village of Konch, and she was married in Biriyakhuurd village.

Her life took a devastating turn when her husband passed away in March.

Her husband was addicted to alcohol, and this addiction ultimately led to his death.

After his death, Kiran Devi was left alone with the responsibility of raising their four-year-old child.

Financial Hardships and Responsibility

There was no other earning member in the family.

Her financial condition became extremely difficult, and she could not understand how she would manage the household expenses and provide for her child.

It was one of the most challenging periods of her life.

She was constantly worried about her child's future.

Assistance Through Government Welfare Schemes

During this difficult period, she decided to seek assistance through government welfare schemes.

Her primary requirement was to apply for the Mukhyamantri Bal Seva Yojana, under which her child could receive financial assistance of approximately ₹2,500–₹3,000 per month, as stated in the original account.

She also needed to apply for the Widow Pension Scheme and the Destitute Women Scheme.

During this time, she received assistance.

After understanding her circumstances, we decided to help her.

Our role was not limited to filling out forms. We also provided her with proper information and helped make the application process easier.

We assisted Kiran Devi in submitting applications for:

- Widow Pension Scheme
- Mukhyamantri Bal Seva Yojana
- Other applicable government welfare schemes

A Ray of Hope for the Future

Although the applications have not yet produced any results and remain under process, Kiran Devi is hopeful that these schemes will provide financial support to her and her child.

Her story reflects the struggle of a widowed woman, her determination and her hope that government support will help her build a better future.`,
      hi: `यह किरन देवी की कहानी है, जिनका जीवन एक दुखद घटना के बाद पूरी तरह बदल गया।

किरन देवी का जन्म कोंच के कुरा गाँव में हुआ था और उनकी शादी बिरियाखुर्द गाँव में हुई थी।

मार्च में उनके पति का निधन होने के बाद उनका जीवन कठिन मोड़ पर आ गया।

उनके पति शराब के आदी थे और अंततः इसी लत के कारण उनकी मृत्यु हो गई।

पति की मृत्यु के बाद किरन देवी पर अपने चार वर्षीय बच्चे के पालन-पोषण की पूरी जिम्मेदारी आ गई।

आर्थिक कठिनाइयाँ और जिम्मेदारी

परिवार में कमाने वाला कोई दूसरा सदस्य नहीं था।

उनकी आर्थिक स्थिति अत्यंत कठिन हो गई और वे समझ नहीं पा रही थीं कि घर का खर्च कैसे चलाएँ और बच्चे की परवरिश कैसे करें।

यह उनके जीवन का सबसे चुनौतीपूर्ण दौर था।

वे लगातार अपने बच्चे के भविष्य को लेकर चिंतित रहती थीं।

सरकारी कल्याणकारी योजनाओं के माध्यम से सहायता

इस कठिन समय में उन्होंने सरकारी कल्याणकारी योजनाओं से सहायता लेने का निर्णय लिया।

उनकी प्राथमिक आवश्यकता मुख्यमंत्री बाल सेवा योजना के लिए आवेदन करना था, जिसके तहत उनके बच्चे को (मूल विवरण के अनुसार) लगभग ₹2,500–₹3,000 प्रति माह की आर्थिक सहायता मिल सकती थी।

उन्हें विधवा पेंशन योजना और निराश्रित महिला योजना के लिए भी आवेदन करना था।

इसी दौरान उन्हें सहायता मिली।

उनकी परिस्थितियों को समझने के बाद हमने उनकी मदद करने का निर्णय लिया।

हमारी भूमिका केवल फॉर्म भरने तक सीमित नहीं थी। हमने उन्हें सही जानकारी दी और आवेदन प्रक्रिया को आसान बनाया।

हमने किरन देवी को निम्नलिखित योजनाओं के लिए आवेदन जमा करने में सहायता की:

- विधवा पेंशन योजना
- मुख्यमंत्री बाल सेवा योजना
- अन्य लागू सरकारी कल्याणकारी योजनाएँ

भविष्य के लिए आशा की किरण

हालाँकि आवेदनों का अभी कोई परिणाम नहीं आया है और वे प्रक्रिया में हैं, फिर भी किरन देवी को उम्मीद है कि ये योजनाएँ उन्हें और उनके बच्चे को आर्थिक सहारा देंगी।

उनकी कहानी एक विधवा महिला के संघर्ष, उसके दृढ़ संकल्प और इस उम्मीद को दर्शाती है कि सरकारी सहयोग से वे बेहतर भविष्य बना सकेंगी।`,
    },
  },
  {
    id: 13,
    name: { en: "Shakuntala Devi", hi: "शकुंतला देवी" },
    location: { en: "Kharag, Uttar Pradesh", hi: "खरग, उत्तर प्रदेश" },
    brief: {
      en: "After decades of labour and her husband's death, Shakuntala received pension and family benefit support with DDJC's help.",
      hi: "दशकों के संघर्ष और पति की मृत्यु के बाद शकुंतला को DDJC की मदद से विधवा पेंशन और पारिवारिक लाभ मिला।",
    },
    detail: {
      en: `This is the story of Shakuntala Devi, a courageous woman from Kharag village in Uttar Pradesh.

For the past thirty years, Shakuntala has struggled against poverty and hardships while taking care of her family.

She has two children: one son and one daughter.

A Life of Responsibility and Struggle

Shakuntala's family owned no agricultural land.

After marriage, she received no financial assistance from her in-laws.

Her husband was also unable to work due to illness.

Consequently, the entire responsibility of supporting the family fell on Shakuntala's shoulders.

She refused to give up.

For the better future of her children, she began working as a labourer in her village.

Later, she moved to Delhi, where she started working as a tailor in a company.

She spent four to five years working in Delhi and used her earnings to pay for her husband's medical treatment.

Unfortunately, his health did not improve.

Eventually, her husband passed away on October 9, 2024.

After his death, Shakuntala returned to her village, Kharag.

Even today, she continues working as a labourer to support her family.

Her daughter is still studying, but her son has discontinued his education because of the family's poor financial condition.

Our Role in Her Empowerment

One day, I invited Shakuntala Devi to a community meeting.

When she narrated her entire story, I was deeply impressed by her courage and determination.

Her painful experiences inspired me to help her.

I decided to assist her in obtaining the necessary documents, including:

- Death Certificate
- Income Certificate
- Other essential documents

After arranging the required documents, I helped her apply for the Widow Pension Scheme and the Family Benefit Scheme.

Shakuntala says that if she had not connected with DDJC (Dalit Dignity and Justice Centre), she might never have received these benefits.

Present Situation and a New Beginning

Our efforts eventually succeeded.

Shakuntala Devi has now started receiving a widow pension and has also received ₹30,000 under the Family Benefit Scheme.

This financial assistance has brought a significant improvement in her life.

Today, her financial condition is better than before, and she can support her children with greater confidence.

This story is not only about one woman's struggle but also about the positive changes that timely assistance and proper guidance can bring to someone's life.`,
      hi: `यह उत्तर प्रदेश के खरग गाँव की साहसी महिला शकुंतला देवी की कहानी है।

पिछले तीस वर्षों से शकुंतला गरीबी और कठिनाइयों से जूझते हुए अपने परिवार की देखभाल करती रही हैं।

उनके दो बच्चे हैं — एक बेटा और एक बेटी।

जिम्मेदारी और संघर्ष का जीवन

शकुंतला के परिवार के पास कोई कृषि भूमि नहीं थी।

शादी के बाद उन्हें ससुराल से कोई आर्थिक सहायता नहीं मिली।

बीमारी के कारण उनके पति भी काम करने में असमर्थ थे।

इसके परिणामस्वरूप परिवार का पूरा भरण-पोषण शकुंतला के कंधों पर आ गया।

उन्होंने हार नहीं मानी।

बच्चों के बेहतर भविष्य के लिए उन्होंने अपने गाँव में मजदूरी शुरू की।

बाद में वे दिल्ली चली गईं, जहाँ उन्होंने एक कंपनी में सिलाई का काम शुरू किया।

उन्होंने दिल्ली में चार से पाँच साल काम किया और अपनी कमाई से पति के इलाज का खर्च उठाया।

दुर्भाग्य से उनके पति का स्वास्थ्य ठीक नहीं हुआ।

अंततः 9 अक्टूबर 2024 को उनके पति का निधन हो गया।

पति की मृत्यु के बाद शकुंतला अपने गाँव खरग लौट आईं।

आज भी वे अपने परिवार का भरण-पोषण करने के लिए मजदूरी करती हैं।

उनकी बेटी अभी पढ़ाई कर रही है, लेकिन परिवार की कमजोर आर्थिक स्थिति के कारण उनके बेटे ने पढ़ाई छोड़ दी है।

सशक्तिकरण में हमारी भूमिका

एक दिन मैंने शकुंतला देवी को एक सामुदायिक बैठक में आमंत्रित किया।

जब उन्होंने अपनी पूरी कहानी सुनाई, तो मैं उनके साहस और दृढ़ संकल्प से बहुत प्रभावित हुआ।

उनके कष्टदायक अनुभवों ने मुझे उनकी मदद करने के लिए प्रेरित किया।

मैंने उन्हें आवश्यक दस्तावेज़ प्राप्त करने में सहायता करने का निर्णय लिया, जिनमें शामिल थे:

- मृत्यु प्रमाण पत्र
- आय प्रमाण पत्र
- अन्य आवश्यक दस्तावेज़

आवश्यक दस्तावेज़ तैयार कराने के बाद मैंने उन्हें विधवा पेंशन योजना और पारिवारिक लाभ योजना के लिए आवेदन करने में मदद की।

शकुंतला कहती हैं कि अगर वे DDJC (दलित डिग्निटी एंड जस्टिस सेंटर) से नहीं जुड़ी होतीं, तो शायद उन्हें ये लाभ कभी नहीं मिल पाते।

वर्तमान स्थिति और नई शुरुआत

हमारे प्रयास अंततः सफल हुए।

शकुंतला देवी को अब विधवा पेंशन मिलनी शुरू हो गई है और उन्हें पारिवारिक लाभ योजना के तहत ₹30,000 भी प्राप्त हुए हैं।

इस आर्थिक सहायता से उनके जीवन में महत्वपूर्ण सुधार आया है।

आज उनकी आर्थिक स्थिति पहले से बेहतर है और वे अधिक आत्मविश्वास के साथ अपने बच्चों का भरण-पोषण कर पा रही हैं।

यह कहानी केवल एक महिला के संघर्ष की नहीं है, बल्कि यह भी दिखाती है कि समय पर सहायता और सही मार्गदर्शन से किसी के जीवन में सकारात्मक बदलाव आ सकते हैं।`,
    },
  },
  {
    id: 14,
    name: { en: "Ramakant Verma", hi: "रामाकांत वर्मा" },
    location: { en: "Orai, Jalaun, Uttar Pradesh", hi: "उरई, जालौन, उत्तर प्रदेश" },
    brief: {
      en: "Falsely accused of electricity theft with a ₹1 lakh penalty, Ramakant secured bail without paying the penalty through DDJC's legal help.",
      hi: "बिजली चोरी के झूठे आरोप और ₹1 लाख जुर्माने का सामना कर रहे रामाकांत को DDJC की कानूनी मदद से बिना जुर्माना भरे जमानत मिली।",
    },
    detail: {
      en: `This is the story of Ramakant Verma, who lives in Orai city, Jalaun district, with his wife and four-year-old daughter.

Ramakant's family is financially weak.

His father, Munna Lal Verma, and Ramakant himself work as daily-wage labourers in the Orai grain market to support the family.

Due to poverty, Ramakant could not receive much formal education, but he is an honest and hardworking person.

The Trap of a False Allegation

In 2019, while Ramakant was at work, an electricity department inspection was taking place in his neighbourhood, Indira Nagar.

There was an empty plot near his house where people used to throw garbage.

Some neighbouring residents had electricity wires passing over Ramakant's rooftop.

During the inspection, electricity department employees noticed these wires and mistakenly assumed that Ramakant had installed an illegal electricity connection, commonly known as a 'Katiya', to steal electricity.

Without conducting a proper investigation, they reportedly asked local residents for his name and registered an FIR against him for electricity theft.

Ramakant came to know about the case only when he received a court summons.

He was shocked to discover that he had been accused of electricity theft.

The most surprising fact was that his house already had a legal electricity connection, and he regularly paid his monthly electricity bills.

Searching for Justice from Door to Door

When Ramakant approached the court to understand his case, the government lawyer advised him to pay a penalty and submit the receipt so that the case could be closed.

When he visited the Energy Department office, he discovered that a penalty of ₹1 lakh had been imposed on him.

Ramakant could barely earn enough to provide two meals a day for his family. Paying such a huge amount was impossible for him.

He approached several people for help, but nobody came forward.

DDJC's Support and the Victory for Justice

During this period, Ramakant's brother-in-law informed me about his situation because I was already handling one of his legal matters.

I immediately reviewed Ramakant's case and understood the entire situation.

I visited the Energy Department office and spoke with the Junior Engineer (JEE).

The officer also insisted that Ramakant should pay the penalty, although he suggested that the amount could be paid in instalments.

Considering Ramakant's financial condition, I decided not to pursue this option.

I decided that I would help Ramakant obtain bail without paying the penalty and without having to go to jail.

This was a significant legal challenge because it was reportedly the first case under the Electricity Act (EC Act) in the Orai Court in which a bail application was being filed without depositing the penalty amount.

My hard work and determination eventually paid off.

I filed the bail application, and Ramakant was granted bail on the same day.

Present Situation

The case is still pending before the court, and there is hope that it will be concluded within the next two or three hearings.

This incident represents not only a victory for Ramakant but also demonstrates how proper legal understanding, determination and timely intervention can help people fight false allegations.

It highlights how a poor and helpless individual can receive support and access justice through organisations such as DDJC.`,
      hi: `यह रामाकांत वर्मा की कहानी है, जो जालौन जिले के उरई शहर में अपनी पत्नी और चार वर्षीय बेटी के साथ रहते हैं।

रामाकांत का परिवार आर्थिक रूप से कमजोर है।

उनके पिता मुन्ना लाल वर्मा और स्वयं रामाकांत, दोनों उरई की अनाज मंडी में दिहाड़ी मजदूरी कर परिवार का भरण-पोषण करते हैं।

गरीबी के कारण रामाकांत अधिक औपचारिक शिक्षा प्राप्त नहीं कर सके, लेकिन वे एक ईमानदार और मेहनती व्यक्ति हैं।

झूठे आरोप का जाल

2019 में, जब रामाकांत काम पर थे, तब उनके मोहल्ले इंदिरा नगर में बिजली विभाग की जाँच चल रही थी।

उनके घर के पास एक खाली प्लॉट था, जहाँ लोग कूड़ा फेंकते थे।

कुछ पड़ोसियों के बिजली के तार रामाकांत की छत के ऊपर से गुजरते थे।

जाँच के दौरान बिजली विभाग के कर्मचारियों ने ये तार देखे और गलती से यह मान लिया कि रामाकांत ने बिजली चोरी के लिए अवैध कनेक्शन, जिसे आमतौर पर 'कटिया' कहा जाता है, लगा रखा है।

बिना उचित जाँच किए, उन्होंने कथित तौर पर स्थानीय लोगों से उनका नाम पूछा और बिजली चोरी के आरोप में उनके खिलाफ एफआईआर दर्ज करा दी।

रामाकांत को इस मामले की जानकारी तब हुई जब उन्हें न्यायालय का समन मिला।

बिजली चोरी का आरोप लगने की बात जानकर वे हैरान रह गए।

सबसे चौंकाने वाली बात यह थी कि उनके घर में पहले से ही वैध बिजली कनेक्शन था और वे नियमित रूप से मासिक बिल जमा करते थे।

न्याय की तलाश में दर-दर भटकना

जब रामाकांत अपने मामले को समझने के लिए न्यायालय गए, तो सरकारी वकील ने उन्हें जुर्माना भरकर रसीद जमा करने की सलाह दी, ताकि मामला बंद हो सके।

जब वे ऊर्जा विभाग कार्यालय गए, तो उन्हें पता चला कि उन पर ₹1 लाख का जुर्माना लगाया गया है।

रामाकांत मुश्किल से अपने परिवार के लिए दो वक्त का भोजन जुटा पाते थे। इतनी बड़ी रकम भरना उनके लिए असंभव था।

उन्होंने कई लोगों से मदद माँगी, लेकिन कोई आगे नहीं आया।

DDJC का सहयोग और न्याय की जीत

इसी दौरान रामाकांत के साले ने मुझे उनकी स्थिति के बारे में बताया, क्योंकि मैं पहले से उनके एक कानूनी मामले को देख रहा था।

मैंने तुरंत रामाकांत का मामला देखा और पूरी स्थिति को समझा।

मैं ऊर्जा विभाग कार्यालय गया और जूनियर इंजीनियर (JEE) से बात की।

अधिकारी ने भी जुर्माना भरने पर जोर दिया, हालांकि उन्होंने यह सुझाव दिया कि राशि किस्तों में दी जा सकती है।

रामाकांत की आर्थिक स्थिति को देखते हुए मैंने यह विकल्प नहीं अपनाने का निर्णय लिया।

मैंने तय किया कि मैं रामाकांत को बिना जुर्माना भरे और बिना जेल गए जमानत दिलाने में मदद करूँगा।

यह एक महत्वपूर्ण कानूनी चुनौती थी, क्योंकि कथित तौर पर उरई न्यायालय में बिजली अधिनियम (EC Act) के तहत यह पहला मामला था जिसमें जुर्माना राशि जमा किए बिना जमानत अर्जी दाखिल की जा रही थी।

मेरी मेहनत और दृढ़ संकल्प का परिणाम मिला।

मैंने जमानत अर्जी दाखिल की और रामाकांत को उसी दिन जमानत मिल गई।

वर्तमान स्थिति

मामला अभी न्यायालय में लंबित है और उम्मीद है कि अगले दो-तीन सुनवाई में इसका निपटारा हो जाएगा।

यह घटना न केवल रामाकांत की जीत है, बल्कि यह भी दिखाती है कि सही कानूनी समझ, दृढ़ संकल्प और समय पर हस्तक्षेप से झूठे आरोपों के खिलाफ लड़ा जा सकता है।

यह दर्शाता है कि DDJC जैसे संगठनों के माध्यम से एक गरीब और असहाय व्यक्ति को भी सहारा और न्याय मिल सकता है।`,
    },
  },
];

export default function StoriesPage() {
  const { language } = useApp();
  const [openId, setOpenId] = useState<number | null>(null);
  const lang = language === "hi" ? "hi" : "en";
  const openStory = stories.find((s) => s.id === openId) ?? null;

  return (
    <div className="bg-white min-h-screen py-10 pt-16 md:py-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex justify-center mb-6">
            <div className="relative h-20 w-20 rounded-full overflow-hidden shadow-md border border-slate-200 bg-slate-50">
              <Image
                src="/images/logo/ddjc-logo.jpg"
                alt="DDJC Logo"
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </div>
          </div>
          <span className="bg-slate-50 text-[#000000] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 inline-block mb-4">
            {lang === "en" ? "Impact & Life" : "प्रभाव और जीवन"}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight mb-4 md:mb-6">
            {lang === "en" ? "Stories of Struggle & Justice" : "संघर्ष और न्याय की कहानियाँ"}
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {lang === "en"
              ? "Brief accounts of courage, legal support, and dignity. Click a story to read the full details."
              : "साहस, कानूनी सहायता और गरिमा की संक्षिप्त कहानियाँ। पूरी जानकारी पढ़ने के लिए कहानी पर क्लिक करें।"}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {stories.map((item) => {
            const isOpen = openId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="text-left bg-slate-50 p-6 md:p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <FaQuoteLeft className="text-[#000000] text-xl opacity-35 mt-1 shrink-0" />
                    <div>
                      <h2 className="font-bold text-[#0A2540] text-lg leading-snug">{item.name[lang]}</h2>
                      <p className="text-slate-400 text-xs mt-0.5">{item.location[lang]}</p>
                    </div>
                  </div>
                  <FaChevronDown
                    className={`text-slate-400 mt-1 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed mt-4">{item.brief[lang]}</p>
                <span className="inline-block mt-4 text-xs font-semibold uppercase tracking-wide text-[#0A2540]">
                  {isOpen ? (lang === "en" ? "Hide details" : "विवरण छिपाएँ") : lang === "en" ? "Read details" : "विवरण पढ़ें"}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {openStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          role="dialog"
          aria-modal="true"
          aria-label={openStory.name[lang]}
          onClick={() => setOpenId(null)}
        >
          <div
            className="bg-white max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-3xl shadow-xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-200 p-5 md:p-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-[#0A2540]">{openStory.name[lang]}</h2>
                <p className="text-slate-500 text-sm mt-1">{openStory.location[lang]}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpenId(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
                aria-label={lang === "en" ? "Close" : "बंद करें"}
              >
                <FaTimes />
              </button>
            </div>
            <div className="p-5 md:p-6">
              <div className="prose prose-slate max-w-none">
                {openStory.detail[lang].split("\n\n").map((para, i) => (
                  <p key={i} className="text-slate-700 text-sm md:text-base leading-relaxed mb-4 whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
