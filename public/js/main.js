(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);


//------------------------------------------Start Dynamic Chat App Script----------//

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}





// var userData = JSON.parse(getCookie('user'));
// console.log('Cookie Data',userData);

// var sender_id = userData._id;
//   var receiver_id ;
// var socket = io('/user-namespace',{
//   auth:{
//     token: 'userData_id'
//   }
// });



//   $(document).ready(function(){

//     $('.user-list').click(function(){
//   var userId =  $(this).attr('data-id');
//        receiver_id = userId;

//       $('.start-head').hide();
//       $('.chat-section').show();
   
//      socket.emit('existsChat',{ sender_id:sender_id, receiver_id:receiver_id});


//     });
//   });

//   //update user online status
//   socket.on('getOnlineUser',function(data){
//     $('#' +data.user_id+'-status').text('Online');
//     $('#' +data.user_id+'-status').removeClass('offline-status');
//     $('#' +data.user_id+'-status').addClass('Online-status');
//   });

//   //update user offline status
//   socket.on('getOfflineUser',function(data){
//     $('#' +data.user_id+'-status').text('Offline');
//     $('#' +data.user_id+'-status').removeClass('online-status');
//     $('#' +data.user_id+'-status').addClass('Offline-status');
//   });


// //chat save of user 
// $('#chat-form').submit(function(event){
//   event.preventDefault();

// var message = $('#message').val();
//  $.ajax({
//   url:'/save-chat',
//   type:'POST',
//   data:{ sender_id:sender_id, receiver_id:receiver_id,message:message},
//   success:function(data){
//      if(data.success){
//       console.log(data.data.message)
//         $('#message').val('');
//         let chat = data.data.message;
//         let html = `
//         <div class="current-user-chat" id='`+data.data._id+`'>
//             <h5><span>`+chat+`</span>
              
//               <i class="fa fa-trash" aria-hidden="true" data-id ='` +data.data._id+`' data-toggle="modal" data-target="#deleteChatModal" ></i>

//                <i class="fa fa-edit" aria-hidden="true" data-id ='` +data.data._id+`'
//                data-msg='`+chat+`'
//                data-toggle="modal" data-target="#editChatModal" ></i>
//               </h5>
  
//                </div>
//         `;
//         $('.chat-container').append(html);
//         socket.emit('newChat',data.data); 

//         scrollChat();
//      }
//      else{
//       alert(data.msg);
//      }
//   }
//  });

// });
// socket.on('loadNewChat',function(data){
// if(sender_id == data.receiver_id && receiver_id == data.sender_id){

//   let html = `
//         <div class="distance-user-chat" id='`+data._id+`'>
//             <h5><span>`+data.message+`</span></h5>
  
//                </div>
//         `;
//         $('.chat-container').append(html);
// }
//   scrollChat();

// });

// //load old chats
// socket.on('loadChats',function(data){
//         $('.chat-container').html('');

//        var chats = data.chats;

//        let html = '';

//        for(let x = 0; x < chats.length; x++){
            
//           let addClass = '';
//           if(chats[x]['sender_id'] == sender_id){
//             addClass = 'current-user-chat';
//           }
//           else{
//                 addClass = 'distance-user-chat';

//           }

//           html +=`
//                  <div class='`+addClass+`' id='` +chats[x]['_id']+`'>
//                      <h5> <span>`+chats[x]['message']+`</span>`;

//               if(chats[x]['sender_id'] == sender_id){
//             html +=`<i class="fa fa-trash" aria-hidden="true" data-id ='` +chats[x]['_id']+`' data-toggle="modal" data-target="#deleteChatModal" ></i>
//             <i class="fa fa-edit" aria-hidden="true" data-id ='` +chats[x]['_id']+`' data-msg='`+chats[x]['message']+`' data-toggle="modal" data-target="#editChatModal" ></i>`
//              ;
//           }
//            html +=`   
//               </h5>
//                </div>
//           `;

//        }

//        $('.chat-container').append(html);
//       scrollChat();
// });

// function scrollChat(){
//   $('.chat-container').animate({
//     scrollTop:$('.chat-container').offset().top + $('.chat-container')[0].scrollHeight
//   },0);
// }

// // delete chat work

// $(document).on('click','.fa-trash',function(){
//   let msg = $(this).parent().text();
//   $('#delete-message').text(msg);

//   $('#delete-message-id').val($(this).attr('data-id'));
// });

// $('#delete-chat-form').submit(function(event){
//   event.preventDefault();

//   var id = $('#delete-message-id').val();

//   $.ajax({
//     url:'/delete-chat',
//     type:'POST',
//     data:{ id:id },
//     success:function(res){
//       if(res.success == true){
//           $('#'+id).remove();
//           $('#deleteChatModal').modal('hide');
//           socket.emit('chatDeleted',id);
//       }
//       else{
//            alert(res.msg);
//       }
//     }
//   });
// });

// socket.on('chatMessageDeleted',function(id){
//   $('#'+id).remove();
// });

// //update user chat functionality

// $(document).on('click','.fa-edit',function(){
//   $('#edit-message-id').val( $(this).attr('data-id'));
//   $('#update-message').val( $(this).attr('data-msg'));
// });

// $('#update-chat-form').submit(function(event){
//   event.preventDefault();

//   var id = $('#edit-message-id').val();
//   var msg = $('#update-message').val(); 
//   $.ajax({
//     url:'/update-chat',
//     type:'POST',
//     data:{ id:id,message:msg },
//     success:function(res){
//       if(res.success == true){        
//           $('#editChatModal').modal('hide');
//           $('#'+id).find('span').text(msg);
//           $('#'+id).find('.fa-edit').attr('data-msg',msg);
//           socket.emit('chatUpdated',{ id:id,message:msg});
//       }
//       else{
//            alert(res.msg);
//       }
//     }
//   });
// });

// socket.on('chatMessageUpdated',function(data){
//   $('#'+data.id).find('span').text(data.message);
// });