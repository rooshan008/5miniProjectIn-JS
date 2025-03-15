let input = document.querySelector('.inputBox')
let checkBox = document.querySelector('.checkBtn')

const reverseString = (value) => {
  return value.split('').reverse().join('')
}

checkBox.addEventListener('click', () => {
  let text = input.value.trim()
  let reversestr = reverseString(text)
  if (reversestr === text) {
    alert('Yes it is palindrome')
  } else {
    alert('Try Again')
  }

  input.value = ''
})
