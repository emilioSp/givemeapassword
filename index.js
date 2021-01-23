function copy() {
    navigator.clipboard.writeText(`${document.getElementById('password').value}`).then(function() {
        document.getElementById('result-copy-ok').style='display: inline-block';
        document.getElementById('copy').style='display: none';
    }, function() {
        alert('failed');
    });
}