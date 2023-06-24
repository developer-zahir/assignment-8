function get_gpa_and_cgpa(mark = 0) {
  let gpa;
  let grade;
  if (mark >= 0 && mark < 33) {
    gpa = 0;
    grade = "F";
  } else if (mark >= 33 && mark < 40) {
    gpa = 1;
    grade = "D";
  } else if (mark >= 40 && mark < 50) {
    gpa = 2;
    grade = "C";
  } else if (mark >= 50 && mark < 60) {
    gpa = 3;
    grade = "B";
  } else if (mark >= 60 && mark < 70) {
    gpa = 3.5;
    grade = "A-";
  } else if (mark >= 70 && mark < 80) {
    gpa = 4;
    grade = "A";
  } else if (mark >= 80 && mark <= 100) {
    gpa = 4.5;
    grade = "A+";
  } else {
    gpa = "invalid";
    grade = "invalid";
  }
  return { gpa: gpa, grade: grade };
}

// get result indivisual subject -----------
function get_result(name, roll, bangla, english, math, science, religion, social) {
  let bng_result = get_gpa_and_cgpa(bangla);
  let eng_result = get_gpa_and_cgpa(english);
  let math_result = get_gpa_and_cgpa(math);
  let science_result = get_gpa_and_cgpa(science);
  let religion_result = get_gpa_and_cgpa(religion);
  let social_result = get_gpa_and_cgpa(social);
  //   CGPA calculate hobe kina sei conditon ----
  let cgpa;
  if (bangla >= 33 && english >= 33 && math >= 33 && science >= 33 && religion >= 33 && social >= 33) {
    cgpa = (bng_result.gpa + eng_result.gpa + math_result.gpa + science_result.gpa + religion_result.gpa + social_result.gpa)/6;
  } else {
    cgpa = 0;
  }

  //   total mark calculate --
  let total_mark = bangla + english + math + science + religion + social;
  return `
  Hi, ${name} ,  Roll: ${roll} , your result is --- 
  Bangal:     ${bangla} and GPA:         ${bng_result.gpa}
  English:    ${english} and GPA:         ${eng_result.gpa}
  Math:       ${math} and GPA:         ${math_result.gpa}
  Science:    ${science} and GPA:         ${science_result.gpa}
  Religion:   ${religion} and GPA:         ${religion_result.gpa}
  Socila:     ${social} and GPA:         ${social_result.gpa}
  -------------------------------------------------
  Total mark: ${total_mark} and total CGPA: ${parseFloat(cgpa).toFixed(2)}
  
  `;
}

