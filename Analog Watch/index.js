setInterval(() => {
    const date = new Date()
    const ht = date.getHours();
    const mt = date.getMinutes();
    const st = date.getSeconds();

    const hour_rotation = (30 * ht) + (mt / 2);
    const minute_rotation = 6 * mt;
    const second_rotation = 6 * st;
    // console.log(second_rotation,minute_rotation,hour_rotation)

    hour.style.transform = `rotate(${hour_rotation}deg)`
    minute.style.transform = `rotate(${minute_rotation}deg)`
    second.style.transform = `rotate(${second_rotation}deg)`
}
    , 1000)