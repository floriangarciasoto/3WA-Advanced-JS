import { encodeData, decodeData } from "./lib/API/crypto";
import { getMessages, saveMessages } from "./lib/storage/localStorage";
import { hideElement, showElement, copyToClipboard } from "./lib/DOM/dom";
import getURLHash from "./lib/API/fetchHash";

const createMessageSection = document.getElementById('create-message-section');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageSubmit = document.getElementById('message-submit');
const messageLinkDv = document.getElementById('message-link-dv');
const messageLink = document.getElementById('message-link');
const messageCopy = document.getElementById('message-copy');
const messageLinkCopiedInform = document.getElementById('message-link-copied-inform');
const secretMessageDv = document.getElementById('secret-message-dv');
const secretMessage = document.getElementById('secret-message');

const messages = getMessages() ?? {};
let messageHash;

function init() {

	if (window.location.hash) {

		if (messages[window.location.hash])	secretMessage.innerHTML = decodeData(messages[window.location.hash]);
		else secretMessage.innerHTML = 'Not secret message found for this URL.';
		showElement(secretMessageDv);

	} else {

		messageInput.addEventListener('input',function(){
			const message = messageInput.value;
			if (message.length === 0) messageSubmit.setAttribute('disabled',true);
			else messageSubmit.removeAttribute('disabled');
		});
		
		messageForm.addEventListener('submit',async function(e){
			e.preventDefault();
		
			formData = new FormData(messageForm);
			const { message } = Object.fromEntries(formData.entries());
			const encodedMessage = encodeData(message);
	
			try {
				messageHash = await getURLHash(encodedMessage);
				messages['#' + messageHash] = encodedMessage;
				saveMessages(messages);

				messageLink.value = window.location.href + '#' + messageHash;
				hideElement(messageForm);
				showElement(messageLinkDv);
			} catch (err) {
				console.log(err.message);
			}
		});

		messageCopy.addEventListener('click',function(){
			copyToClipboard(messageLink.value);
			showElement(messageLinkCopiedInform);
		});
	
		showElement(createMessageSection);
	
	}
}

init();
