(async () => {
  const base = 'http://localhost:3000/api';
  const fetchOpts = (body, token) => ({
    method: 'POST',
    headers: Object.assign({ 'Content-Type': 'application/json' }, token ? { Authorization: `Bearer ${token}` } : {}),
    body: JSON.stringify(body),
  });

  try {
    console.log('1) Registering account...');
    const regBody = { nom: 'E2E Test', email: 'e2e+test@novasms.test', motDePasse: 'Aa1?aaaa', nomBoutique: 'E2E Shop', pays: 'FR' };
    let res = await fetch(`${base}/auth/register`, fetchOpts(regBody));
    const regJson = await res.json();
    console.log('REGISTER:', regJson);
    const token = regJson.access_token || regJson.accessToken;
    if (!token) throw new Error('No token returned');

    console.log('2) Creating contact...');
    const contactBody = { email: 'contact1@novasms.test', firstName: 'Jean', lastName: 'Dupont', phone: '+22500000000' };
    res = await fetch(`${base}/contacts`, fetchOpts(contactBody, token));
    const contactJson = await res.json();
    console.log('CONTACT:', contactJson);
    const contactId = contactJson.id || contactJson.data?.id || contactJson.contact?.id;
    if (!contactId) throw new Error('No contact id');

    console.log('3) Creating automation...');
    const autoBody = { name: 'E2E Automation', trigger: 'api', delaySeconds: 0, channel: 'Email', status: 'Active' };
    res = await fetch(`${base}/automations`, fetchOpts(autoBody, token));
    const autoJson = await res.json();
    console.log('AUTOMATION:', autoJson);
    const autoId = autoJson.id || autoJson.data?.id || autoJson.automation?.id;
    if (!autoId) throw new Error('No automation id');

    console.log('4) Triggering automation...');
    const triggerBody = { contactId, delaySeconds: 0 };
    res = await fetch(`${base}/automations/${autoId}/trigger`, fetchOpts(triggerBody, token));
    const trigJson = await res.json();
    console.log('TRIGGER:', trigJson);

    console.log('5) Fetching report...');
    res = await fetch(`${base}/automations/${autoId}/report`, { headers: { Authorization: `Bearer ${token}` } });
    const reportJson = await res.json();
    console.log('REPORT:', reportJson);

    process.exit(0);
  } catch (err) {
    console.error('ERROR:', err);
    process.exit(2);
  }
})();
