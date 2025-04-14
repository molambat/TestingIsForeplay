import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 20, // Nombre d'utilisateurs virtuels
  duration: '30s', // Durée totale du test
};

export default function () {
  const res = http.get('https://lambodrip.com');
  
  check(res, {
    'status is 200': (r) => r.status === 200,
    'page loaded under 1s': (r) => r.timings.duration < 1000,
  });

  sleep(1);
}
