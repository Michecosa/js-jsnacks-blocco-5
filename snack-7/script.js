const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

const student_ID2 = students.find(student => student.id === 2);
console.log("Studente con ID: 2 ");
/* console.log(student_ID2); */
console.log(
  `{ id: ${student_ID2.id}, name: '${student_ID2.name}', age: ${student_ID2.age}, class: '${student_ID2.class}' }`
);