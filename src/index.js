import './styles.css';
import plateCalc from './plateCalc';

const $app = document.getElementById('app');
const $result = document.getElementById('result');
const $input = document.getElementById('weight');

$input.addEventListener('input', ({ target: { value } }) => {
  const plates = plateCalc(value);
  $result.innerHTML = `you need:
    ${Object.keys(plates)
      .map(p => `${plates[p]}x${p}lbs`)
      .join(', ')}
    `;
});
