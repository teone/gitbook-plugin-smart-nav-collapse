# Smart Nav Collapse on Gitbook

This plugin will collapse navigation items with children on Gitbook,
including the ones not pointing to a page.

For example this `SUMMARY.md` structure will work flawlessly:

```markdown
# Summary

* [chapter 1](chapter1.md)
	* [Sub 1](sub1.md)
	* Sub Section 2
		* [Sub 2](sub2.md)
```

To install this plugin:

```
npm install gitbook-plugin-smart-nav-collapse --save
```
 
and to use it add this to your `book.json`:

```json
{
    "plugins": ["toggle-chapters"]
}
```

### Thanks

This plugin is inspired by [gitbook-plugin-toggle-chapters](https://github.com/poojan/gitbook-plugin-toggle-chapters)