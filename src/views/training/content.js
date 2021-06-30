export const pistol = () => {
    return {
        0: 'pistol 1',
        1: 'pistol 2',
        2: 'pistol 3',
        3: 'pistol 4'
    }
}






export const training = {
    'pistol': {
        'trainingSections': {
            0: `<p>A pistol or handgun is designed or intended for the purpose of self-defense at ranges less than 100 feet. 
            Due to the design and ammunition used in the majority of modern pistols, energy is loss quite high and quickly becomes less effective beyond 100 feet.
            </p>
            <p>With a small form factor compared to other firearms the pistol makes for an ideal self-defense weapon for civilian use, primarily in the form of conceal-carry or in some cases open-carry.</p>
            <p>Most often conceal-carry is done so in an Inside-the-Waistband configuration (IWB), and an open-carry is done so using an Outside-the-Waistband (OWB) configuration. 
            While Unity Arms affirms that IWB is a more safe and removes the firearm from public view all excercises can be performed in either configuraiton.</p>`,
            1: `<p>IWB carry is the ideal carry method for day-to-day civilians. A firearm in public view shares information not only to good intentioned civilians but also to those that may seek to take advantage of you or anyone else. By carrying a firearm in an OWB configuration you make yourself a primary target and may make others uneasy as to why your firearm is visible and what your intentions are.</p>
            <p>We should remember that your firearm is a tool, in this a case a pistol, and it's intent is for self-defense. By carrying our firearm in an IWB configuration we do more to protect ourselves than we may realize.</p>
            <p>An IWB protects our firearms from anyone that may intend to due harm to us, by concealing the firearm on our person we can more easily protect our firearm from an ill willed civilian as well as conceal information that may provide an advatange to that individual/s</p>
            <p>This bring up another important details about our carry configuration...</p>`,
            2: `<p>Carry Position, is in regard to where on our person our firearm is placed. If we think of ourselves as a clock, with 12 o'Clock being our anterior side, 6 o'Clock being our posterior and moving around our body in a clock-wise fashion, we have a number of carry positions available.</p>
            <p>While there is no perfect carry position there are a number of considerations to take when deciding which postion to choose. In no particular order... </p>
                <ul>
                    <li>Can I comfortably carry my firearm without obstructing daily activity?</li>
                    <li>Can I easily access my firearm if the need arises regardless of body position?</li>
                    <li>Can I protect my firearm if someone were to try and remove it from my person?</li>
                </ul>

                <p>The above are all personal quesitons that no one car truly decide for you. 
                Just ensure that wherever you do decide to carry your firearm that you use a quality retention device that ensures the firearm cannot fall out and that the trigger is inaccessible while retained.</p>
            `,  
        },
        'relatedTrainingModules':[
        'grip','reloads','recoil','stance'
        ],
        
    },
    'rifle': {
        'trainingSections': {
            0: '<p>Thumb placement of your dominant hand is personal preference.</p>',
            1: '<p>Section 2</p>',
            2: 'Section 3'  
        },
        'relatedTrainingModules':{
            0:'grip',
            1:'reloads',
            2:'recoil',
            3:'stance'
        },
    },
}


export const relatedMaterial = {
    'rifle': [{
        'grip': {

        },
        'stance': {

        },
        'recoil': {

        },
        'reloads': {
            
        }
    }],  
    'pistol': [{
        'grip': {

        },
        'stance': {

        },
        'recoil': {

        },
        'reloads': {
            
        }
    }],
    'safety': [{

    }],
    'first aid': [{

    }]
}