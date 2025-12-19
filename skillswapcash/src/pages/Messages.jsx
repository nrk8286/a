import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Search, Send, Paperclip, MoreVertical } from 'lucide-react';

export const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const conversations = [
    {
      id: 1,
      user: 'Sarah Johnson',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson',
      lastMessage: 'Thanks for the consultation!',
      time: '2 hours ago',
      unread: 2,
      online: true,
    },
    {
      id: 2,
      user: 'Mike Chen',
      avatar: 'https://ui-avatars.com/api/?name=Mike+Chen',
      lastMessage: 'When can we schedule the next session?',
      time: '5 hours ago',
      unread: 0,
      online: false,
    },
    {
      id: 3,
      user: 'Emma Williams',
      avatar: 'https://ui-avatars.com/api/?name=Emma+Williams',
      lastMessage: 'Perfect, see you then!',
      time: '1 day ago',
      unread: 0,
      online: true,
    },
    {
      id: 4,
      user: 'David Brown',
      avatar: 'https://ui-avatars.com/api/?name=David+Brown',
      lastMessage: 'Can you send me the files?',
      time: '2 days ago',
      unread: 1,
      online: false,
    },
  ];

  const messages = {
    1: [
      {
        id: 1,
        sender: 'Sarah Johnson',
        content: 'Hi! I saw your web development service and I\'m interested.',
        time: '10:30 AM',
        isMine: false,
      },
      {
        id: 2,
        sender: 'You',
        content: 'Hello! Thanks for reaching out. I\'d be happy to help with your project.',
        time: '10:35 AM',
        isMine: true,
      },
      {
        id: 3,
        sender: 'Sarah Johnson',
        content: 'Great! I need a custom web application for my business.',
        time: '10:40 AM',
        isMine: false,
      },
      {
        id: 4,
        sender: 'You',
        content: 'That sounds interesting. Let\'s schedule a consultation to discuss the details.',
        time: '10:45 AM',
        isMine: true,
      },
      {
        id: 5,
        sender: 'Sarah Johnson',
        content: 'Thanks for the consultation!',
        time: '2 hours ago',
        isMine: false,
      },
    ],
  };

  const currentMessages = messages[selectedConversation] || [];
  const currentConversation = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim()) {
      // Handle sending message
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600 mt-2">Connect with your clients and providers</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden" style={{ height: '600px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 h-full">
            {/* Conversations List */}
            <div className="border-r border-gray-200 flex flex-col">
              {/* Search */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Conversation List */}
              <div className="flex-1 overflow-y-auto">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedConversation === conversation.id ? 'bg-primary-50' : ''
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="relative">
                        <img
                          src={conversation.avatar}
                          alt={conversation.user}
                          className="w-12 h-12 rounded-full"
                        />
                        {conversation.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900">
                            {conversation.user}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {conversation.time}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600 truncate">
                            {conversation.lastMessage}
                          </p>
                          {conversation.unread > 0 && (
                            <span className="ml-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                              {conversation.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="md:col-span-2 flex flex-col">
              {currentConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          src={currentConversation.avatar}
                          alt={currentConversation.user}
                          className="w-10 h-10 rounded-full"
                        />
                        {currentConversation.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold text-gray-900">
                          {currentConversation.user}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {currentConversation.online ? 'Online' : 'Offline'}
                        </p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <MoreVertical className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {currentMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.isMine
                              ? 'bg-gradient-to-r from-primary to-secondary text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.isMine ? 'text-white/80' : 'text-gray-500'
                            }`}
                          >
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200">
                    <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                      <button
                        type="button"
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <Paperclip className="h-5 w-5 text-gray-600" />
                      </button>
                      <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="p-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all"
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Select a conversation to start messaging
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
