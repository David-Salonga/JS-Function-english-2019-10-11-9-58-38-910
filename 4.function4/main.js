function countWords(message) {
	return message.replace(/(^\s*)|(\s*$)/gi, '').replace(/[ ]{2,}/gi, ' ').replace(/\n /, '\n').split(' ').length;
}
console.log(countWords('Good morning, I love JavaScript.'))