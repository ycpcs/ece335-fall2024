// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new Topic("Lecture 1: Intro to Discrete Math", "lectures/lecture01.html"),
		reading: "Intro. pg. 1-6",
	},
	{
		topic: new Topic("Lecture 2: Deductive Reasoning and Logical Connectives","lectures/lecture02.html"),
		reading: "1.1 pg. 8-13",
	},
	{
		topic: new Topic("Lecture 3: Truth Tables", "lectures/lecture03.html"),
		reading: "1.2 pg. 15-24",
	},
	{
		topic: new Topic("Lecture 4: The Conditional and Biconditional Connectives","lectures/lecture04.html"),
		reading: "1.5 pg. 45-55",
	},
	{
		topic: new DoubleTopic("Lecture 5: Quantifiers", "lectures/lecture05.html","Assignment 1 Due","assign/assign01.html"),
		reading: "2.1 pg. 58-66",
	},
	{
		topic: new Topic("Lecture 6: Equivalencies Involving Quantifiers", "lectures/lecture06.html"),
		reading: "2.2 pg. 68-76",
	},
	{
		topic: new DoubleTopic("Exam 1 Review", "", "Assignment 2 Due","assign/assign02.html")
	},
	{
		topic: new Topic("** Exam 1", "")
	},
// 	{
// 		topic: new Topic("Lecture 7: Variables and Sets", "lectures/lecture07.html"),
// 		reading: "1.3 pg. 26-33",
// 	},
// 	{
// 		topic: new Topic("Lecture 8: Operations on Sets","lectures/lecture08.html", ),
// 		reading: "1.4 pg. 35-43",
// 	},
// 	{
// 		topic: new DoubleTopic("Lecture 9: More Operations on Sets","lectures/lecture09.html", "Assignment 3 Due","assign/assign03.html"),
// 		reading: "2.3 pg. 78-86",
// 	},
// 	{
// 		topic: new Topic("Lecture 10: Proof Strategies", "lectures/lecture10.html"),
// 		reading: "3.1 pg. 89-98",
// 	},
// 	{
// 		topic: new Topic("Lecture 11: Proofs Involving Negations and Conditionals","lectures/lecture11.html"),
// 		reading: "3.2 pg. 100-111",
// 	},
// 	{
// 		topic: new DoubleTopic("Lecture 12: Proofs Involving Quantifiers","lectures/lecture12.html", "Assignment 4 Due","assign/assign04.html"),
// 		reading: "3.3 pg. 113-127",
// 	},
// 	{
// 		topic: new Topic("Lecture 13: Proofs Involving Conjunctions and Biconditionals","lectures/lecture13.html"),
// 		reading: "3.4 pg. 130-139",
// 	},
// 	{
// 		topic: new Topic("Lecture 14: Proofs Involving Disjunctions","lectures/lecture14.html"),
// 		reading: "3.5 pg. 142-150",
// 	},
// 	{
// 		topic: new DoubleTopic("Exam 2 Review", "", "Assignment 5 Due","assign/assign05.html")
// 	},
// 	{
// 		topic: new Topic("** Exam 2", "")
// 	},
// 	{
// 		topic: new Topic("Lecture 16: Proof by Mathematical Induction","lectures/lecture16.html"),
// 		reading: "6.1 pg. 273-278",
// 	},
// 	{
// 		topic: new Topic("Lecture 17: Recursion","lectures/lecture17.html"),
// 		reading: "6.3 pg. 293-299",
// 	},
// 	{
// 		topic: new Topic("Lecture 18: Relations","lectures/lecture18.html"),
// 		reading: "4.1-4.3 pg. 163-186",
// 	},
// 	{
// 		topic: new Topic("Lecture 19: Functions","lectures/lecture19.html"),
// 		reading: "5.1 pg. 229-236",
// 	},
// 	{
// 		topic: new Topic("Lecture 20: Function Properties","lectures/lecture20.html"),
// 		reading: "5.2-5.3 pg. 240-256",
// 	},
// 	{
// 		topic: new Topic("Lecture 21: Combinatorics","lectures/lecture21.html"),
// 		reading: "",
// 	},
// 	{
// 		topic: new Topic("Lecture 22: Permutations","lectures/lecture22.html"),
// 		reading: "",
// 	},
// 	{
// 		topic: new Topic("Lecture 23: Combinations","lectures/lecture22.html"),
// 		reading: "",
// 	},
// 	{
// 		topic: new DoubleTopic("Exam 4 Review", "", "Assignment 6 Due","assign/assign06.html")
// 	},
// 	{
// 		topic: new Topic("** Exam 4", "")
// 	},
];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
		new FinalExamDay("101", new Date("12/12/2024 10:15:00")),
//		new FinalExamDay("101", new Date("05/11/2022 08:00:00")),
//		new FinalExamDay("103", new Date("12/13/2019 12:45:00")),
//		new FinalExamDay("104", new Date("12/13/2019 15:00:00"))
];

// vim:ts=2:
