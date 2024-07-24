//Wed Jul 24 2024 14:09:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var url = $request.url,
  updatedUrl = url;
if (url.includes("video/getSource")) updatedUrl = url.replace(/([?&]ticket=)\w{32}/, "$1694FBE621FC030B89A899E077D69EA49");else url.includes("video/source") && (updatedUrl = url.replace(/([?&]ticket=)\w{32}/, "$11E711EE1494738138CFF7E9DCAFBADA1"));
$done({
  "url": updatedUrl
});