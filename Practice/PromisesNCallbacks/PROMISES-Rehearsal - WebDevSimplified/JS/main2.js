function rand() {
  return parseInt(Math.random() * 5000 + 800);
}

setTimeout(function() {
    alert(`Hi all!`)
}, rand())