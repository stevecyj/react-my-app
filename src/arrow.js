// const double = x => x * 2;

function jump() {
    console.log(this);
}

const a = {};
a.jump = jump;

a.jump();
