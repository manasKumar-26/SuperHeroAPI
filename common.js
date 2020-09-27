function setWallpapers() {
  const urls = [
    "https://wallpaperaccess.com/full/1158102.jpg",
    "https://image.winudf.com/v2/image/b3JnLnRlY2h3aW5kb3cuc3VwZXJoZXJvX3NjcmVlbl8xNl90NWpkN2RvdQ/screen-16.jpg?fakeurl=1&type=.jpg",
    "https://free4kwallpapers.com/uploads/originals/2015/09/01/pictures-shield-marvel-superhe-42943.jpg",
    "https://free4kwallpapers.com/uploads/originals/2016/09/08/wonder-woman-gal-gadot-hd-wallpaper.jpg",
    "https://i.pinimg.com/originals/98/31/59/98315999c3f2396b65149cc013cbc098.jpg",
    "https://i.pinimg.com/originals/61/8e/c3/618ec34e3a39dccae46a4276e3b1734d.jpg",
    "https://cdn.hipwallpaper.com/i/32/52/KUwRgS.png",
  ];
  let picIndex = Math.floor(Math.random() * urls.length);
  console.log(picIndex);
  let link = urls[picIndex];
  document.querySelector("body").style.background = `url(${link})`;
}
setWallpapers();
