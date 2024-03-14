import mongoose, {SchemaType} from 'mongoose';


// connection string
await mongoose.connect('mongodb+srv://mjbicalan:2958vT6uXkV5E9ry@clusterstudent.sfnfan4.mongodb.net/ICS');

const Student = mongoose.model('students', {
    stdnum: Number,
    fname: String,
    lname: String,
    age: Number
  })

// the result parameter will contain a single object (the first matching document found
// if no matching document was found, result will be null
let data = await Student.findOne({ fname: "jo", lname: "seph" });
console.log(data);

let data2 = await Student.find({ age: 28 });
console.log(data2);


const newStudent = new Student({
  stdnum: 12345678,
  fname: "Juan",
  lname: "dela Cruz",
  age: 20
});

await newStudent.save();

let findNewStudent = await Student.find({stdnum: 12345678});
console.log(findNewStudent)

//update
let stud = await Student.findOne({ age: 20});
stud.fname = "Peter"
await stud.save();

