
const tag: string = '<div class="my-class" id="my-id">';

const printTag = (tag: string) => {
    const reg: RegExp = /<([^> ]+)([^>]*)>/;
    const matchesResult: RegExpMatchArray | null = tag.match(reg);
    if (matchesResult) {
        let temp = matchesResult[2].replace(/[~%&\\"]/g, "");
        let results = temp.replace(/[~%&\\=]/g, ":")
        console.log(`The attributes of your tag are:${results}`);
    }
    else {
        console.log('Please enter a valid tag');
    }

}

