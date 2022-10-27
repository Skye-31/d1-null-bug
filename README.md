# This bug has now been fixed
Thanks team :)



#### A quick repo outlining the D1 worker binding incorrectly converting `null` to `"null"`

## Steps to reproduce
Change the wrangler.toml to use your own database info and run `wrangler dev`

Observe that the outputted value is `{"field":"null"}` instead of `{"field":null}`

This is quite a high priority bug, it's causing me to have to do a lot of extra work to convert the data back to the correct type.

## Notes
This is also applicable to any BLOB column types, where a javascript ArrayBuffer is converted to a string.

Discord thread for ArrayBuffer bug report (in private d1 channel): <https://discord.com/channels/595317990191398933/992060581832032316/1030004866917077004>
