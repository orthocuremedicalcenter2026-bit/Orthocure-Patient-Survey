export type Language = 'ar' | 'en';
export type Branch = 'Orthocure Jumeirah Branch' | 'Orthocure Mirdif Branch';

export interface Question {
  id: string;
  type: 'choice' | 'text' | 'rating';
  text: { ar: string; en: string };
  options?: { ar: string[]; en: string[] };
}

export interface SurveyResponse {
  timestamp: string;
  branch: Branch;
  department: string;
  language: Language;
  [key: string]: string | number;
}

export const SURVEY_QUESTIONS: Record<string, Question[]> = {
  'Doctor Consultation': [
    { id: 'scheduling', type: 'rating', text: { ar: 'كيف تقيم عملية حجز الموعد؟', en: 'How would you rate the appointment scheduling process?' } },
    { id: 'reception', type: 'rating', text: { ar: 'كيف تقيم لباقة واحترافية موظفي الاستقبال؟', en: 'How would you rate the courtesy and professionalism of our reception staff?' } },
    { id: 'cleanliness', type: 'rating', text: { ar: 'ما مدى رضاك عن نظافة وراحة العيادة؟', en: 'How satisfied are you with the clinic’s cleanliness and comfort?' } },
    { id: 'waiting', type: 'rating', text: { ar: 'ما مدى رضاك عن وقت الانتظار قبل مقابلة الطبيب؟', en: 'How satisfied are you with the waiting time before seeing the doctor?' } },
    { id: 'diagnosis_clarity', type: 'rating', text: { ar: 'هل قام الطبيب بشرح التشخيص وخطة العلاج بوضوح؟', en: 'Did the doctor clearly explain your diagnosis and treatment plan?' } },
    { id: 'overall_exp', type: 'rating', text: { ar: 'بشكل عام، كيف تقيم تجربتك لزيارة الطبيب؟', en: 'Overall, how would you rate your doctor visit experience?' } },
    { id: 'recommend', type: 'rating', text: { ar: 'هل توصي بمركز أورثوكيور الطبي لعائلتك أو أصدقائك؟', en: 'Would you recommend Orthocure Medical Center to family or friends?' } }
  ],
  'MRI Scan': [
    { id: 'scheduling', type: 'rating', text: { ar: 'ما مدى سهولة حجز موعد الأشعة؟', en: 'How easy was it to book your MRI appointment?' } },
    { id: 'reception', type: 'rating', text: { ar: 'كيف تقيم احترافية وتعاون موظفي الاستقبال؟', en: 'How would you rate the professionalism and helpfulness of the reception staff?' } },
    { id: 'waiting', type: 'rating', text: { ar: 'ما مدى رضاك عن وقت الانتظار قبل إجراء الأشعة؟', en: 'How satisfied were you with the waiting time before your MRI scan?' } },
    { id: 'cleanliness', type: 'rating', text: { ar: 'كيف تقيم نظافة وتعقيم منطقة الأشعة؟', en: 'How would you rate the cleanliness and hygiene of the MRI area?' } },
    { id: 'doctor_prof', type: 'rating', text: { ar: 'كيف تقيم الاحترافية والرعاية المقدمة من فني الأشعة؟', en: 'How would you rate the professionalism and patient care provided by the radiographer?' } },
    { id: 'diagnosis_clarity', type: 'rating', text: { ar: 'ما مدى وضوح التعليمات المعطاة قبل وأثناء الفحص؟', en: 'How clear were the instructions given before and during the MRI scan?' } }
  ],
  'Physiotherapy': [
    { id: 'scheduling', type: 'rating', text: { ar: 'كيف تقيم عملية حجز الموعد؟', en: 'How would you rate the appointment scheduling process?' } },
    { id: 'reception', type: 'rating', text: { ar: 'كيف تقيم لباقة واحترافية فريق الاستقبال؟', en: 'How would you rate the courtesy and professionalism of our reception team?' } },
    { id: 'cleanliness', type: 'rating', text: { ar: 'كيف تقيم نظافة والراحة العامة للعيادة؟', en: 'How would you rate the cleanliness and overall comfort of the clinic?' } },
    { id: 'waiting', type: 'rating', text: { ar: 'ما مدى رضاك عن وقت الانتظار قبل جلستك؟', en: 'How satisfied were you with the waiting time prior to your session?' } },
    { id: 'doctor_prof', type: 'rating', text: { ar: 'كيف تقيم احترافية وسلوك أخصائي العلاج الطبيعي؟', en: 'How would you rate the physiotherapist’s professionalism and conduct?' } },
    { id: 'diagnosis_clarity', type: 'rating', text: { ar: 'ما مدى وضوح شرح الأخصائي لخطة العلاج والتمارين؟', en: 'How clearly did the physiotherapist explain your treatment plan and exercises?' } },
    { id: 'overall_exp', type: 'rating', text: { ar: 'كيف تقيم تجربتك العامة للعلاج الطبيعي؟', en: 'How would you rate your overall physiotherapy experience?' } },
    { id: 'recommend', type: 'rating', text: { ar: 'ما مدى احتمالية توصيتك بمركز أورثوكيور الطبي لعائلتك أو أصدقائك؟', en: 'How likely are you to recommend Orthocure Medical Center to family or friends?' } }
  ],
  'Kinesiology & Rehabilitation': [
    { id: 'scheduling', type: 'rating', text: { ar: 'كيف تقيم عملية حجز الموعد؟', en: 'How would you rate the appointment scheduling process?' } },
    { id: 'reception', type: 'rating', text: { ar: 'كيف تقيم لباقة واحترافية فريق الاستقبال؟', en: 'How would you rate the courtesy and professionalism of our reception team?' } },
    { id: 'cleanliness', type: 'rating', text: { ar: 'كيف تقيم نظافة والراحة العامة للعيادة؟', en: 'How would you rate the cleanliness and overall comfort of the clinic?' } },
    { id: 'waiting', type: 'rating', text: { ar: 'ما مدى رضاك عن وقت الانتظار قبل جلستك؟', en: 'How satisfied were you with the waiting time prior to your session?' } },
    { id: 'doctor_prof', type: 'rating', text: { ar: 'كيف تقيم احترافية وسلوك المدرب؟', en: 'How would you rate the Instructor’s professionalism and conduct?' } },
    { id: 'diagnosis_clarity', type: 'rating', text: { ar: 'ما مدى وضوح شرح المدرب للتمارين؟', en: 'How clearly did the Instructor explain your exercises?' } },
    { id: 'overall_exp', type: 'rating', text: { ar: 'كيف تقيم تجربتك العامة مع المدرب؟', en: 'How would you rate your overall Instructor experience?' } },
    { id: 'recommend', type: 'rating', text: { ar: 'ما مدى احتمالية توصيتك بمركز أورثوكيور الطبي لعائلتك أو أصدقائك؟', en: 'How likely are you to recommend Orthocure Medical Center to family or friends?' } }
  ]
};
