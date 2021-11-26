import "./Userprofilecards.css"
import UserProfile from "./Userprofile.jsx"

const contactInfo = [
    {
      id: 1,
      firstname: 'Emmanuel',
      email: 'emmanuel@email.com',
      lastname: 'lueul',
      description: 'blablabla',
      link:"https://discord.com/invite/fVD2wmQwJ9"
    },
    {
      id: 2,
      firstname: 'Johana',
      email: 'johana@email.com',
      lastname: 'bala',
      description: 'blablabla'
    },
    {
      id: 3,
      firstname: 'Lucas',
      email: 'lucas@email.com',
      lastname: 'super',
      description: 'blablabla'
    },
    {
      id: 4,
      firstname: 'Marie',
      email: 'marie@email.com',
      lastname: 'poule',
      description: 'blablabla'
    },
    {
      id: 5,
      firstname: 'Pedro',
      email: 'pedro@email.com',
      lastname: 'carotte',
      description: 'blablabla'
    },
  ];

const UserProfileCards = () => {
    return (
   <div>
       {contactInfo.map((contact, index) => (
          <UserProfile
            key={index}
            id={contact.id}
            firstname={contact.firstname}
            email={contact.email}
            lastname={contact.lastname} 
            link={contact.link}/>
       ))}
      </div> 
)
}

export default UserProfileCards;