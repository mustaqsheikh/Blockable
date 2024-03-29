Blockable
====

Blockable is a jQuery plugin that makes an entire block clickable.


How to use
----

1. Download Blockable (preferably the minified one)
2. Reference to it on your page, somewhere:
   <pre><code>&lt;script src="/js/blockable.min.js"&gt;&lt;/script&gt;</code></pre>
3. Call Blockable on your element.
   <pre><code>&lt;script&gt;
    $('.element').blockable({
    	cursor: true,
    	hover: false
    });
&lt;/script&gt;</code></pre>
4. Rejoice in your big-ass clickable blocks.


Parameters
----

Blockable (so far) comes with two parameters: <code>hover</code> and <code>cursor</code>, which are both boolean values, set to true by default. If true, <code>hover</code> adds a class of 'hover' when the block is hovered, and <code>cursor</code> adds a hand cursor to the block, like a link would.


Licensing and Support
----

Blockable is released under the Public Domain, and, as such, I'll only offer limited support for it. However, you're free to report an error or feature-request on the issues page.