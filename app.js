const elf = {
    title: `Elf`,
    main: `Buddy`,
    quote: function (){
        return `The best way to spread Christmas cheer is singing loud for all to hear`;
    },
    info: function(){
        return `${this.title} is about ${this.main}`;
    }
};

const muppetXmas = {
    title: `The Muppet Christmas Carol`,
    main: `Ebenezer Scrooge`,
    quote: function (){
        return `Whereever you find love it feels like Christmas`;
    },
    info: function(){
        return `${this.title} is about ${this.main}`;
    }
};

function XmasMovie(title, main){
    this.title = title;
    this.main = main;
}

XmasMovie.prototype.info = function(){
    return `${this.title} is about ${this.main}`;
}

const elf1 = new XmasMovie(`Elf`, `Buddy`);

const muppetXmas = new XmasMovie(`The Muppet Christmas Coral`, `Ebenezer Scrooge`);

class CM {
    constructor(title, main){
        this.title = title;
        this.main = main;
    }
    info(){
        return `${this.title} is about ${this.main}`
    }
    static loveXmas(){
        return `I Love Christmas!`;
    }
}

const elf2 = new CM(`Elf`, `Buddy`);

const muppetXmas2 = new CM(
    `The Muppet Christmas Coral`,
    `Ebenezer Scrooge`
);

console.log(CM.loveXmas());

class CMCast extends CM {
    constructor(title, main, cast){
        super(title, main);
        this.cast = cast;
    }
}

const elf3 = new CMCast(
    `Elf`,
    `Buddy`,
    {buddy: `Will Ferrell`, walter: `James Caan`, jovie: `Zooey Deschanel`, papaElf: `Bob Newhart`}
);

const muppetXmas3 = new CMCast(
    `The Muppet Christmas Carol`,
    `Ebenezer Scrooge`,
    {scrooge: `Michael Caine`, charlesDickens: `The Great Gonzo`, bobCrachit: `Kermit The Frog`}
);