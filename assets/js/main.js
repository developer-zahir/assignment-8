let myRoll = Number(prompt("আপনার রোল লিখুনঃ"));

if (myRoll <= 10) {
  const student = students_data.find((student) => student.roll === myRoll);
  const { bangla, english, math, science, religion, social } = student.subjects;
  document.getElementById("output-box").innerText = get_result(student.name, student.roll, bangla, english, math, science, religion, social);
  document.getElementById("output-box").style.textAlign = "left";
} else {
  document.getElementById("output-box").innerText = `এই রোলের ${myRoll} কোন ডাটা আমাদের ডাটাবেজে নেই, ১ থেকে ১০ এর মধ্যে ট্রাই করুন`;
  document.getElementById("output-box").style.background = "#c946465e";

}
