import Image from 'next/image';
import Heading from './Heading';

const reviews = [
  {
    id: 1,
    Name: "Sana's Mother",
    imageSrc: '/images/girl-1.png',
    reviewText: "Mashallah, you're doing great! May Allah bless you with happiness always. May Allah protect you, Ameen. My child will learn from you.",
  },
  {
    id: 2,
    Name: "Danish's Mother",
    imageSrc: '/images/girl-2.jpeg',
    reviewText: 'Hina MashAllah ap bht acxa treat krti hn bacho ko ap s bachy bht Khush ha r Khushi Khushi parhtyn hain apki tajweed bht pyari ha bacho m b bht acxi itni jldi improvement ai ha Allah pak apko aese hi prhany ki tofeeq dy ameeeeen',
  },
  {
    id: 3,
    Name: "Abdul Ahad's Mother",
    imageSrc: '/images/girl-3.jpg',
    reviewText: 'G ماشاءاللہ hum ap sy satisfied hain 🥰 We are Satisfied with you way of Teaching Our kids are happy to learn from you.',
  }, 
  {
    id: 4,
    Name: "Simmi's Mother",
    imageSrc: '/images/girl-4.jpeg',
    reviewText: 'Salam sister As my children reading Quran from you Your reading is best every words explanation well to children.Thank you for being guiding Light our child quran journey Your teaching methods highly appreciated And recommended.Thanks hina baji😊'
  }, 
  {
    id: 5,
    Name: "Mariyam's Mother",
    imageSrc: '/images/girl-5.jpeg',
    reviewText: 'Slaam I am satisfied from the teacher behavior and teaching method She teaches like a kind mother and  she is well behaved and honest teacher ♥️♥️♥️',
  }, 
  {
    id: 6,
    Name: "Javeria's Mother",
    imageSrc: '/images/girl-6.jpeg',
    reviewText: 'Mashallah, you are doing great! the way you teach my kids is amazing. May Allah Bless you, Ameen.',
  },
  {
    id: 7,
    Name: "Hooriya's Mother",
    imageSrc: '/images/girl-7.png',
    reviewText: 'Children Learn from you with great interest. You are a great teacher.',
  }, 
  {
    id: 8,
    Name: "Hadiya's Mother",
    imageSrc: '/images/girl-8.png',
    reviewText: 'I am Really Happy with the way you teach my child. My child is really happy to learn from you.',
  },
  {
    id: 9,
    Name: "Fahad's Mother",
    imageSrc: '/images/girl-8.png',
    reviewText: 'I had a great experience with Quran Academy My Children are really Happy.Online Quran Learning Academy is best.',
  },
  {
    id: 10,
    Name: "Nimra's Mother",
    imageSrc: '/images/girl-10.png',
    reviewText: "❤️ I'm one of her student's mother and I can say that she's a really good teacher. Her teaching skills plus her behavior with students is very nice. She teaches very kindly, patiently, without giving any pressure to children ❤️",
  },
];

export default function Feedback() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
    
        <Heading text="Feedback" />
       <p className='text-base md:text-md py-2 mb-3  transition-transform duration-300 hover:scale-90'>I highly value the excellent feedback of My satisfied Students & their Parents.I have fulfilled countless students’ wishes to learn and Recite the Holy Quran worldwide and still covering the entire community with my skills and dynamic Quran Educating Services.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white hover:bg-green-600 hover:text-white p-4 border rounded-lg shadow transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
             
              <div className="w-12 h-12 relative mr-4">
                <Image
                  src={review.imageSrc}
                  alt="client Image"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                ))}
              </div>
            </div>
             <h4 className="text-md font-bold underline">{review.Name}</h4>
            <p>{review.reviewText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
