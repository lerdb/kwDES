const Encode = (id, format) => {
    var arrayE = [31n, 0n, 1n, 2n, 3n, 4n, -1n, -1n, 3n, 4n, 5n, 6n, 7n, 8n, -1n, -1n, 7n, 8n, 9n, 10n, 11n, 12n, -1n, -1n, 11n, 12n, 13n, 14n, 15n, 16n, -1n, -1n, 15n, 16n, 17n, 18n, 19n, 20n, -1n, -1n, 19n, 20n, 21n, 22n, 23n, 24n, -1n, -1n, 23n, 24n, 25n, 26n, 27n, 28n, -1n, -1n, 27n, 28n, 29n, 30n, 31n, 30n, -1n, -1n,];
    var arrayIP = [57n, 49n, 41n, 33n, 25n, 17n, 9n, 1n, 59n, 51n, 43n, 35n, 27n, 19n, 11n, 3n, 61n, 53n, 45n, 37n, 29n, 21n, 13n, 5n, 63n, 55n, 47n, 39n, 31n, 23n, 15n, 7n, 56n, 48n, 40n, 32n, 24n, 16n, 8n, 0n, 58n, 50n, 42n, 34n, 26n, 18n, 10n, 2n, 60n, 52n, 44n, 36n, 28n, 20n, 12n, 4n, 62n, 54n, 46n, 38n, 30n, 22n, 14n, 6n,];
    var arrayIP_1 = [39n, 7n, 47n, 15n, 55n, 23n, 63n, 31n, 38n, 6n, 46n, 14n, 54n, 22n, 62n, 30n, 37n, 5n, 45n, 13n, 53n, 21n, 61n, 29n, 36n, 4n, 44n, 12n, 52n, 20n, 60n, 28n, 35n, 3n, 43n, 11n, 51n, 19n, 59n, 27n, 34n, 2n, 42n, 10n, 50n, 18n, 58n, 26n, 33n, 1n, 41n, 9n, 49n, 17n, 57n, 25n, 32n, 0n, 40n, 8n, 48n, 16n, 56n, 24n,];
    var arrayLs = [1n, 1n, 2n, 2n, 2n, 2n, 2n, 2n, 1n, 2n, 2n, 2n, 2n, 2n, 2n, 1n];
    var arrayLsMask = [0n, 1048577n, 3145731n];
    var arrayP = [15n, 6n, 19n, 20n, 28n, 11n, 27n, 16n, 0n, 14n, 22n, 25n, 4n, 17n, 30n, 9n, 1n, 7n, 23n, 13n, 31n, 26n, 2n, 8n, 18n, 12n, 29n, 5n, 21n, 10n, 3n, 24n,];
    var arrayPC_1 = [56n, 48n, 40n, 32n, 24n, 16n, 8n, 0n, 57n, 49n, 41n, 33n, 25n, 17n, 9n, 1n, 58n, 50n, 42n, 34n, 26n, 18n, 10n, 2n, 59n, 51n, 43n, 35n, 62n, 54n, 46n, 38n, 30n, 22n, 14n, 6n, 61n, 53n, 45n, 37n, 29n, 21n, 13n, 5n, 60n, 52n, 44n, 36n, 28n, 20n, 12n, 4n, 27n, 19n, 11n, 3n,];
    var arrayPC_2 = [13n, 16n, 10n, 23n, 0n, 4n, -1n, -1n, 2n, 27n, 14n, 5n, 20n, 9n, -1n, -1n, 22n, 18n, 11n, 3n, 25n, 7n, -1n, -1n, 15n, 6n, 26n, 19n, 12n, 1n, -1n, -1n, 40n, 51n, 30n, 36n, 46n, 54n, -1n, -1n, 29n, 39n, 50n, 44n, 32n, 47n, -1n, -1n, 43n, 48n, 38n, 55n, 33n, 52n, -1n, -1n, 45n, 41n, 49n, 35n, 28n, 31n, -1n, -1n,];
    var matrixNSBox = [[14n, 4n, 3n, 15n, 2n, 13n, 5n, 3n, 13n, 14n, 6n, 9n, 11n, 2n, 0n, 5n, 4n, 1n, 10n, 12n, 15n, 6n, 9n, 10n, 1n, 8n, 12n, 7n, 8n, 11n, 7n, 0n, 0n, 15n, 10n, 5n, 14n, 4n, 9n, 10n, 7n, 8n, 12n, 3n, 13n, 1n, 3n, 6n, 15n, 12n, 6n, 11n, 2n, 9n, 5n, 0n, 4n, 2n, 11n, 14n, 1n, 7n, 8n, 13n,], [15n, 0n, 9n, 5n, 6n, 10n, 12n, 9n, 8n, 7n, 2n, 12n, 3n, 13n, 5n, 2n, 1n, 14n, 7n, 8n, 11n, 4n, 0n, 3n, 14n, 11n, 13n, 6n, 4n, 1n, 10n, 15n, 3n, 13n, 12n, 11n, 15n, 3n, 6n, 0n, 4n, 10n, 1n, 7n, 8n, 4n, 11n, 14n, 13n, 8n, 0n, 6n, 2n, 15n, 9n, 5n, 7n, 1n, 10n, 12n, 14n, 2n, 5n, 9n,], [10n, 13n, 1n, 11n, 6n, 8n, 11n, 5n, 9n, 4n, 12n, 2n, 15n, 3n, 2n, 14n, 0n, 6n, 13n, 1n, 3n, 15n, 4n, 10n, 14n, 9n, 7n, 12n, 5n, 0n, 8n, 7n, 13n, 1n, 2n, 4n, 3n, 6n, 12n, 11n, 0n, 13n, 5n, 14n, 6n, 8n, 15n, 2n, 7n, 10n, 8n, 15n, 4n, 9n, 11n, 5n, 9n, 0n, 14n, 3n, 10n, 7n, 1n, 12n,], [7n, 10n, 1n, 15n, 0n, 12n, 11n, 5n, 14n, 9n, 8n, 3n, 9n, 7n, 4n, 8n, 13n, 6n, 2n, 1n, 6n, 11n, 12n, 2n, 3n, 0n, 5n, 14n, 10n, 13n, 15n, 4n, 13n, 3n, 4n, 9n, 6n, 10n, 1n, 12n, 11n, 0n, 2n, 5n, 0n, 13n, 14n, 2n, 8n, 15n, 7n, 4n, 15n, 1n, 10n, 7n, 5n, 6n, 12n, 11n, 3n, 8n, 9n, 14n,], [2n, 4n, 8n, 15n, 7n, 10n, 13n, 6n, 4n, 1n, 3n, 12n, 11n, 7n, 14n, 0n, 12n, 2n, 5n, 9n, 10n, 13n, 0n, 3n, 1n, 11n, 15n, 5n, 6n, 8n, 9n, 14n, 14n, 11n, 5n, 6n, 4n, 1n, 3n, 10n, 2n, 12n, 15n, 0n, 13n, 2n, 8n, 5n, 11n, 8n, 0n, 15n, 7n, 14n, 9n, 4n, 12n, 7n, 10n, 9n, 1n, 13n, 6n, 3n,], [12n, 9n, 0n, 7n, 9n, 2n, 14n, 1n, 10n, 15n, 3n, 4n, 6n, 12n, 5n, 11n, 1n, 14n, 13n, 0n, 2n, 8n, 7n, 13n, 15n, 5n, 4n, 10n, 8n, 3n, 11n, 6n, 10n, 4n, 6n, 11n, 7n, 9n, 0n, 6n, 4n, 2n, 13n, 1n, 9n, 15n, 3n, 8n, 15n, 3n, 1n, 14n, 12n, 5n, 11n, 0n, 2n, 12n, 14n, 7n, 5n, 10n, 8n, 13n,], [4n, 1n, 3n, 10n, 15n, 12n, 5n, 0n, 2n, 11n, 9n, 6n, 8n, 7n, 6n, 9n, 11n, 4n, 12n, 15n, 0n, 3n, 10n, 5n, 14n, 13n, 7n, 8n, 13n, 14n, 1n, 2n, 13n, 6n, 14n, 9n, 4n, 1n, 2n, 14n, 11n, 13n, 5n, 0n, 1n, 10n, 8n, 3n, 0n, 11n, 3n, 5n, 9n, 4n, 15n, 2n, 7n, 8n, 12n, 15n, 10n, 7n, 6n, 12n,], [13n, 7n, 10n, 0n, 6n, 9n, 5n, 15n, 8n, 4n, 3n, 10n, 11n, 14n, 12n, 5n, 2n, 11n, 9n, 6n, 15n, 12n, 0n, 3n, 4n, 1n, 14n, 13n, 1n, 2n, 7n, 8n, 1n, 2n, 12n, 15n, 10n, 4n, 0n, 3n, 13n, 14n, 6n, 9n, 7n, 8n, 9n, 6n, 15n, 1n, 5n, 12n, 3n, 10n, 14n, 5n, 8n, 7n, 11n, 0n, 4n, 13n, 2n, 11n,],];
    var arrayMask = [1n, 2n, 4n, 8n, 16n, 32n, 64n, 128n, 256n, 512n, 1024n, 2048n, 4096n, 8192n, 16384n, 32768n, 65536n, 131072n, 262144n, 524288n, 1048576n, 2097152n, 4194304n, 8388608n, 16777216n, 33554432n, 67108864n, 134217728n, 268435456n, 536870912n, 1073741824n, 2147483648n, 4294967296n, 8589934592n, 17179869184n, 34359738368n, 68719476736n, 137438953472n, 274877906944n, 549755813888n, 1099511627776n, 2199023255552n, 4398046511104n, 8796093022208n, 17592186044416n, 35184372088832n, 70368744177664n, 140737488355328n, 281474976710656n, 562949953421312n, 1125899906842624n, 2251799813685248n, 4503599627370496n, 9007199254740992n, 18014398509481984n, 36028797018963968n, 72057594037927936n, 144115188075855872n, 288230376151711744n, 576460752303423488n, 1152921504606846976n, 2305843009213693952n, 4611686018427387904n, -9223372036854775808n];
    
    var bit_transform = function (arr_int, n, l) {
        var l2 = 0n;
        for (var i = 0n; i < n; i = i + 1n) {
            if (arr_int[i] < 0n || (parseInt(l & arrayMask[(arr_int[i])]) == 0)) {
                continue;
            };
            l2 |= arrayMask[i];
        };
        return l2;
    };
    
    var des64 = function (longs, l) {
        var out = 0n;
        var SOut = 0n;
        var pR = [0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n];
        var pSource = [0n, 0n];
        var sbi = 0n;
        var t = 0n;
        var L = 0n;
        var R = 0n;
        var out = bit_transform(arrayIP, 64n, l);
        pSource[0] = 4294967295n & out;
        pSource[1] = (-4294967296n & out) >> 32n;
        for (var i = 0n; i < 16n; i = i + 1n) {
            R = pSource[1n];
            R = bit_transform(arrayE, 64n, R);
            R ^= longs[i];
            for (var j = 0n; j < 8n; j = j + 1n) {
                pR[j] = 255n & R >> j * 8n;
            };
            SOut = 0n;
            for (var sbi = 7n; sbi >= 0n; sbi = sbi - 1n) {
                SOut <<= 4n;
                SOut |= matrixNSBox[sbi][pR[sbi]];
            };
            R = bit_transform(arrayP, 32n, SOut);
            L = pSource[0n];
            pSource[0n] = pSource[1n];
            pSource[1n] = L ^ R;
        };
        pSource.reverse();
        out = -4294967296n & pSource[1] << 32n | 4294967295n & pSource[0];
        out = bit_transform(arrayIP_1, 64n, out);
        return out;
    };
    
    var strOri = "corp=kuwo&p2p=1&type=convert_url2&format=" + format + "&rid=" + id;
    console.log(strOri)
    let utf8Encode = new TextEncoder();
    var msgg = utf8Encode.encode(strOri);
    var msg = [];
    for (var everymsg = 0; everymsg < msgg.length; everymsg++) {
        msg[everymsg] = BigInt(msgg[everymsg]);
    };
    var l = 7887891437440363641n;
    var j = BigInt(parseInt(msg.length / 8));
    var arrLong1 = [0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n];
    var sub_l = l;
    var sub_longs = arrLong1;
    var lll2 = bit_transform(arrayPC_1, 56n, sub_l);
    for (var i = 0n; i < 16n; i = i + 1n) {
        lll2 = ((lll2 & arrayLsMask[arrayLs[i]]) << 28n - arrayLs[i] | (lll2 & ~arrayLsMask[arrayLs[i]]) >> arrayLs[i]);
        sub_longs[i] = bit_transform(arrayPC_2, 64n, lll2);
    };
    var arrLong2 = [];
    for (var temp = 0; temp < j; temp++) {
        arrLong2.push(0n);
    };
    for (var m = 0n; m < j; m = m + 1n) {
        for (var n = 0n; n < 8n; n = n + 1n) {
            arrLong2[m] |= msg[n + m * 8n] << n * 8n;
        };
    };
    var arrLong3 = [];
    for (var temp = 0; temp < parseInt((1n + 8n * (j + 1n)) / 8n); temp++) {
        arrLong3.push(0n);
    };
    for (var i1 = 0n; i1 < j; i1 = i1 + 1n) {
        arrLong3[i1] = des64(arrLong1, arrLong2[i1]);
    };
    var arrByte11 = strOri.substr(parseInt(j * 8n));
    var arrByte12 = utf8Encode.encode(arrByte11);
    var arrByte1 = [];
    for (var every = 0; every < arrByte12.length; every++) {
        arrByte1[every] = BigInt(arrByte12[every]);
    };
    var l2 = 0n;
    for (var i1 = 0n; i1 < BigInt(msg.length % 8); i1 = i1 + 1n) {
        l2 |= arrByte1[i1] << i1 * 8n;
    };
    arrLong3[j] = des64(arrLong1, l2);
    var arrByte2 = [];
    for (var temp = 0; temp < (8 * arrLong3.length); temp++) {
        arrByte2.push(0n);
    };
    var i4 = 0n;
    for (var temp = 0; temp < arrLong3.length; temp++) {
        var l3 = arrLong3[temp];
        for (var i6 = 0n; i6 < 8n; i6 = i6 + 1n) {
            arrByte2[i4] = (255n & l3 >> i6 * 8n);
            i4 += 1n;
        };
    };
    var b1 = arrByte2;
    var b2 = [];
    for (var i = 0; i < b1.length; i++) {
        b2[i] = parseInt(b1[i]);
    };
    var binary = '';
    var bytes = new Uint8Array(b2);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    };
    var retdata = btoa(binary);
    console.log(retdata);
    return "http://mobi.kuwo.cn/mobi.s?f=kuwo&q=" + retdata;
}

console.log(Encode("440616", "flac"))

// format 可选 ape|flac|mp3|aac
// 例如传参"flac|mp3|aac" 则表示先尝试获取flac格式，若失败则获取mp3格式，以此类推
