function shortcut(s1, s2) {
  // your code here
	let p=s1.length;
	let q=s2.length;
	if((p===0)&&(q===0)){
		return 0;
	}
	let c=s1[0];
	let d=s2[0];
	return (c+d);
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
