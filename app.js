let myRoll = Number(prompt("Enter your roll:"));
if(myRoll <= 10 ){
    const student = students_data.find((student) => student.roll === myRoll);
    const { bangla, english, math, science, religion, social } = student.subjects;
    console.log(get_result(student.name, student.roll, bangla, english, math, science, religion, social));
}else{
    console.log(`এই রোলের ডাটা আমাদের ডাটাবেজে নেই, ১ থেকে ১০ এর মধ্যে ট্রাই করুন`);
}