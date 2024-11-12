'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db } from './lib/firebase';
import { motion } from 'framer-motion';
import LetterCard from './components/LetterCard';
import NavBar from './components/NavBar';

const BTS_MEMBERS = ['RM', 'Jin', 'Suga', 'J-Hope', 'Jimin', 'V', 'Jungkook', 'BTS'];

export default function Home() {
  const [letters, setLetters] = useState([]);
  const [newLetter, setNewLetter] = useState('');
  const [name, setName] = useState('');
  const [recipient, setRecipient] = useState('');
  const [selectedMember, setSelectedMember] = useState('All');
  const cardVariants = ['card-variant-1', 'card-variant-2', 'card-variant-3', 'card-variant-4', 'card-variant-5'];

  useEffect(() => {
    const q = query(collection(db, 'letters'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const letterData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLetters(letterData);
    });

    return () => unsubscribe();
  }, []);

  const submitLetter = async (e) => {
    e.preventDefault();
    if (!newLetter.trim() || !name.trim() || !recipient) return;

    await addDoc(collection(db, 'letters'), {
      content: newLetter,
      name: name.trim(),
      recipient,
      timestamp: serverTimestamp(),
    });

    setNewLetter('');
    setName('');
    setRecipient('');
  };

  const filteredLetters = letters.filter(letter => 
    selectedMember === 'All' || letter.recipient === selectedMember
  );

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="main-content container mx-auto px-4">
        <motion.form 
          onSubmit={submitLetter} 
          className="mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="letter-input w-full p-4 text-lg"
                placeholder="Enter your name"
                required
                maxLength={50}
              />
            </div>
            <div className="w-48">
              <label className="block text-gray-700 mb-2">To Member</label>
              <select
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="letter-input w-full px-4 text-lg cursor-pointer"
                required
              >
                <option value="">Select...</option>
                {BTS_MEMBERS.map(member => (
                  <option key={member} value={member}>{member}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Message</label>
            <textarea
              value={newLetter}
              onChange={(e) => setNewLetter(e.target.value)}
              className="letter-input w-full p-6 text-lg min-h-[150px]"
              placeholder="Write your heartfelt message..."
              required
              maxLength={1000}
            />
            <div className="text-right mt-2 text-sm text-gray-500">
              {newLetter.length}/1000 characters
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn-primary">
              Send Letter 💌
            </button>
          </div>
        </motion.form>

        <div className="mb-8">
          <h2 className="text-gray-700 font-medium mb-4 text-center">Filter by member</h2>
          <div className="flex justify-center flex-wrap gap-2">
            <button
              onClick={() => setSelectedMember('All')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedMember === 'All'
                  ? 'bg-[#5E367C] text-white'
                  : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              All
            </button>
            {BTS_MEMBERS.map(member => (
              <button
                key={member}
                onClick={() => setSelectedMember(member)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedMember === member
                    ? 'bg-[#5E367C] text-white'
                    : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                {member}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {filteredLetters.map((letter, index) => (
            <LetterCard 
              key={letter.id} 
              letter={letter} 
              variant={cardVariants[index % cardVariants.length]}
            />
          ))}
        </motion.div>

        {filteredLetters.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No letters found for {selectedMember} 💜
          </div>
        )}
      </main>
    </div>
  );
}
