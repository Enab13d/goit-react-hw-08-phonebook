import { HomeHeader, HomeMainTitle, HomeSection, FeaturesList, FeaturesListItem, HomeDescription, FlexContainer, ImageThumb, LogoHeader } from "../Pages/HomePage.styled";


const HomePage = () => {
  return (
    <>
      <HomeSection>
        <FlexContainer>
          <div>
        <HomeMainTitle>Your All-in-One Contact Management App</HomeMainTitle>
        <HomeDescription>
          {' '}
          Welcome to Phonebook, your ultimate solution for organizing, saving,
          editing, and effortlessly managing all your contacts in one convenient
          place. Say goodbye to the chaos of scattered contacts and say hello to
          streamlined communication and effortless accessibility.
        </HomeDescription>
        
        <HomeHeader>Key Features:</HomeHeader>
        <FeaturesList>
          <FeaturesListItem>
            <HomeDescription>
              📱 User-Friendly Interface: Our intuitive design makes managing
              your contacts a breeze. Whether you're tech-savvy or a first-time
              user, you'll find it easy to navigate and use.
            </HomeDescription>
          </FeaturesListItem>
          <FeaturesListItem>
            <HomeDescription>
              🔒 Secure and Private: We prioritize your data security. Your
              contacts are safe with us, and we offer robust privacy features to
              keep your personal information protected.
            </HomeDescription>
          </FeaturesListItem>
          <FeaturesListItem>
            <HomeDescription>
              ✨ Effortless Contact Creation: Adding new contacts is a snap.
              Simply enter the details, and MyPhonebook will organize them for
              you.
            </HomeDescription>
          </FeaturesListItem>
          <FeaturesListItem>
            <HomeDescription>
              📝 Edit with Ease: Need to update a contact's information? You can
              easily edit any contact's details whenever you need to.
            </HomeDescription>
          </FeaturesListItem>
          <FeaturesListItem>
            <HomeDescription>
              🔍 Quick Search: Find the contact you're looking for in seconds
              with our powerful search functionality. No more scrolling
              endlessly.
            </HomeDescription>
          </FeaturesListItem>
            </FeaturesList>
            </div>
          <div>
            <LogoHeader>Phonebook</LogoHeader>
                    <ImageThumb>
          <img alt="cat talking by phone" width={400} src={require("../../constants/assets/images/cat-main.jpg") } />
          </ImageThumb>
</div>
          </FlexContainer>
      </HomeSection>
    </>
  );
};

export default HomePage;
