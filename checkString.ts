function ChkString(s: string): void {
    var result: number = s.indexOf("Marvellous");
    if (result != -1)
        console.log("String contains Marvellous in it.")
    else
        console.log("String does not contain Marvellous in it.")
}

var str: string = " Pune Kothrud Marvellous Infosystems.";
ChkString(str);