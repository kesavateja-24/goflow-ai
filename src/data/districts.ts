export interface DistrictInfo {
  id: string;
  nameEn: string;
  nameTe: string;
  headquarters: string;
  discom: 'APCPDCL' | 'APEPDCL' | 'APSPDCL';
}

export const AP_DISTRICTS: DistrictInfo[] = [
  { id: 'alluri', nameEn: 'Alluri Sitharama Raju', nameTe: 'అల్లూరి సీతారామరాజు', headquarters: 'Paderu', discom: 'APEPDCL' },
  { id: 'anakapalli', nameEn: 'Anakapalli', nameTe: 'అనకాపల్లి', headquarters: 'Anakapalli', discom: 'APEPDCL' },
  { id: 'ananthapuramu', nameEn: 'Ananthapuramu', nameTe: 'అనంతపురం', headquarters: 'Ananthapuramu', discom: 'APSPDCL' },
  { id: 'annamayya', nameEn: 'Annamayya', nameTe: 'అన్నమయ్య', headquarters: 'Rayachoti', discom: 'APSPDCL' },
  { id: 'bapatla', nameEn: 'Bapatla', nameTe: 'బాపట్ల', headquarters: 'Bapatla', discom: 'APCPDCL' },
  { id: 'chittoor', nameEn: 'Chittoor', nameTe: 'చిత్తూరు', headquarters: 'Chittoor', discom: 'APSPDCL' },
  { id: 'konaseema', nameEn: 'Dr. B.R. Ambedkar Konaseema', nameTe: 'డా. బి.ఆర్. అంబేద్కర్ కోనసీమ', headquarters: 'Amalapuram', discom: 'APEPDCL' },
  { id: 'east_godavari', nameEn: 'East Godavari', nameTe: 'తూర్పు గోదావరి', headquarters: 'Rajahmundry', discom: 'APEPDCL' },
  { id: 'eluru', nameEn: 'Eluru', nameTe: 'ఏలూరు', headquarters: 'Eluru', discom: 'APCPDCL' },
  { id: 'guntur', nameEn: 'Guntur', nameTe: 'గుంటూరు', headquarters: 'Guntur', discom: 'APCPDCL' },
  { id: 'kakinada', nameEn: 'Kakinada', nameTe: 'కాకినాడ', headquarters: 'Kakinada', discom: 'APEPDCL' },
  { id: 'krishna', nameEn: 'Krishna', nameTe: 'కృష్ణా', headquarters: 'Machilipatnam', discom: 'APCPDCL' },
  { id: 'kurnool', nameEn: 'Kurnool', nameTe: 'కర్నూలు', headquarters: 'Kurnool', discom: 'APCPDCL' },
  { id: 'nandyal', nameEn: 'Nandyal', nameTe: 'నంద్యాల', headquarters: 'Nandyal', discom: 'APCPDCL' },
  { id: 'ntr', nameEn: 'NTR (Vijayawada)', nameTe: 'ఎన్టీఆర్ (విజయవాడ)', headquarters: 'Vijayawada', discom: 'APCPDCL' },
  { id: 'palnadu', nameEn: 'Palnadu', nameTe: 'పల్నాడు', headquarters: 'Narasaraopet', discom: 'APCPDCL' },
  { id: 'manyam', nameEn: 'Parvathipuram Manyam', nameTe: 'పార్వతీపురం మన్యం', headquarters: 'Parvathipuram', discom: 'APEPDCL' },
  { id: 'prakasam', nameEn: 'Prakasam', nameTe: 'ప్రకాశం', headquarters: 'Ongole', discom: 'APCPDCL' },
  { id: 'srikakulam', nameEn: 'Srikakulam', nameTe: 'శ్రీకాకుళం', headquarters: 'Srikakulam', discom: 'APEPDCL' },
  { id: 'nellore', nameEn: 'Sri Potti Sriramulu Nellore', nameTe: 'శ్రీ పొట్టి శ్రీరాములు నెల్లూరు', headquarters: 'Nellore', discom: 'APSPDCL' },
  { id: 'sri_sathya_sai', nameEn: 'Sri Sathya Sai', nameTe: 'శ్రీ సత్యసాయి', headquarters: 'Puttaparthi', discom: 'APSPDCL' },
  { id: 'tirupati', nameEn: 'Tirupati', nameTe: 'తిరుపతి', headquarters: 'Tirupati', discom: 'APSPDCL' },
  { id: 'visakhapatnam', nameEn: 'Visakhapatnam', nameTe: 'విశాఖపట్నం', headquarters: 'Visakhapatnam', discom: 'APEPDCL' },
  { id: 'vizianagaram', nameEn: 'Vizianagaram', nameTe: 'విజయనగరం', headquarters: 'Vizianagaram', discom: 'APEPDCL' },
  { id: 'west_godavari', nameEn: 'West Godavari', nameTe: 'పశ్చిమ గోదావరి', headquarters: 'Bhimavaram', discom: 'APEPDCL' },
  { id: 'ysr_kadapa', nameEn: 'YSR Kadapa', nameTe: 'వైఎస్సార్ కడప', headquarters: 'Kadapa', discom: 'APSPDCL' }
];
