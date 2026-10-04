/**
 * Lista de contactos del servidor simulado (Mock Data).
 * Representa la base de datos inicial de campeones de League of Legends.
 * Cada contacto posee:
 * - id: Identificador numérico único.
 * - name: Nombre del campeón.
 * - status: Estado de presencia estilo Discord ('online', 'idle', 'dnd', 'offline').
 * - image: URL oficial del avatar del campeón (CDN Data Dragon de Riot Games).
 * - banner_color: Color temático utilizado en el banner de la tarjeta de perfil.
 * - member_since: Fecha de ingreso o lanzamiento del campeón.
 * - description: Breve descripción biográfica del personaje.
 * - messages: Historial de mensajes con id, contenido, autor, hora y estado de entrega ('seen' | 'unseen').
 */
export const contact_list_server = [
    {
        id: 1,
        name: 'Jinx',
        status: 'online', // Estados de presencia de Discord: online | idle | dnd | offline
        image: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jinx.png',
        banner_color: '#e83377',
        member_since: 'Oct 10, 2013',
        description: 'A manic and impulsive criminal from Zaun who loves unleashing chaos with her weapons Fishbones and Pow-Pow.',
        messages: [
            {
                id: 1,
                content: 'Hey! Guess what I built today? A rocket launcher that shoots fireworks shaped like smiles! :D',
                author: 'Jinx',
                created_at: 'Today at 2:20 PM',
                delivery_status: 'seen'
            },
            {
                id: 2,
                content: 'Please tell me you didn\'t test it near the Piltover treasury this time...',
                author: 'Me',
                created_at: 'Today at 2:25 PM',
                delivery_status: 'seen'
            },
            {
                id: 3,
                content: 'Fishbones told me not to, but Pow-Pow said DO IT DO IT DO IT!',
                author: 'Jinx',
                created_at: 'Today at 2:27 PM',
                delivery_status: 'seen'
            },
            {
                id: 4,
                content: 'Caitlyn and the enforcers are already scanning the docks.',
                author: 'Me',
                created_at: 'Today at 2:28 PM',
                delivery_status: 'seen'
            },
            {
                id: 5,
                content: 'Pfft, let them chase me! The night is boring without a few explosions anyway!',
                author: 'Jinx',
                created_at: 'Today at 2:30 PM',
                delivery_status: 'seen'
            },
            {
                id: 6,
                content: 'Just keep your head low until the sirens stop.',
                author: 'Me',
                created_at: 'Today at 2:31 PM',
                delivery_status: 'seen'
            },
            {
                id: 7,
                content: 'Boring! I\'m painting neon graffiti on the hextech gates. Catch me if you can!',
                author: 'Jinx',
                created_at: 'Today at 2:32 PM',
                delivery_status: 'seen'
            }
        ]
    },
    {
        id: 2,
        name: 'Yasuo',
        status: 'idle',
        image: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Yasuo.png',
        banner_color: '#3a5a78',
        member_since: 'Dec 13, 2013',
        description: 'An agile Ionian swordsman who commands the wind itself to vanquish his foes and seek redemption.',
        messages: [
            {
                id: 1,
                content: 'Yasuo, the wind is howling across the Weeping Glade. Where are you heading?',
                author: 'Me',
                created_at: 'Today at 1:00 PM',
                delivery_status: 'seen'
            },
            {
                id: 2,
                content: 'A wanderer isn\'t always lost. Just looking for a tavern with decent wine.',
                author: 'Yasuo',
                created_at: 'Today at 1:05 PM',
                delivery_status: 'seen'
            },
            {
                id: 3,
                content: 'Noxian scouts were spotted past the border again.',
                author: 'Me',
                created_at: 'Today at 1:07 PM',
                delivery_status: 'seen'
            },
            {
                id: 4,
                content: 'No cure for fools... My blade will be ready when the wind turns.',
                author: 'Yasuo',
                created_at: 'Today at 1:10 PM',
                delivery_status: 'seen'
            },
            {
                id: 5,
                content: 'Don\'t let anger cloud your blade, my friend.',
                author: 'Me',
                created_at: 'Today at 1:12 PM',
                delivery_status: 'seen'
            },
            {
                id: 6,
                content: 'Honor is in the heart, not the name. Sleep well, summoner.',
                author: 'Yasuo',
                created_at: 'Today at 1:15 PM',
                delivery_status: 'unseen'
            }
        ]
    },
    {
        id: 3,
        name: 'Ahri',
        status: 'online',
        image: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ahri.png',
        banner_color: '#8b4a8e',
        member_since: 'Dec 14, 2011',
        description: 'A vastayan fox who shapes magic into orbs of raw energy, exploring Runeterra in search of her origin.',
        messages: [
            {
                id: 1,
                content: 'The spirit trees whisper tonight. Can you feel the memories lingering in the air?',
                author: 'Ahri',
                created_at: 'Today at 11:30 AM',
                delivery_status: 'seen'
            },
            {
                id: 2,
                content: 'Are you still searching for the secrets of your past?',
                author: 'Me',
                created_at: 'Today at 11:32 AM',
                delivery_status: 'seen'
            },
            {
                id: 3,
                content: 'Step by step across Runeterra. Every soul carries a piece of a story I once forgot.',
                author: 'Ahri',
                created_at: 'Today at 11:35 AM',
                delivery_status: 'seen'
            },
            {
                id: 4,
                content: 'Be careful not to lose yourself in other people\'s memories.',
                author: 'Me',
                created_at: 'Today at 11:38 AM',
                delivery_status: 'seen'
            },
            {
                id: 5,
                content: 'I\'ve learned to guard my heart. Don\'t worry, the nine-tailed fox is watchful.',
                author: 'Ahri',
                created_at: 'Today at 11:41 AM',
                delivery_status: 'seen'
            },
            {
                id: 6,
                content: 'Meet me at the lantern grove if you wish to talk under the stars.',
                author: 'Ahri',
                created_at: 'Today at 11:45 AM',
                delivery_status: 'seen'
            }
        ]
    },
    {
        id: 4,
        name: 'Ekko',
        status: 'online',
        image: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ekko.png',
        banner_color: '#1abc9c',
        member_since: 'May 28, 2015',
        description: 'A young Zaunite prodigy who manipulates time with the Z-Drive and leads the Firelights.',
        messages: [
            {
                id: 1,
                content: 'Just finished calibrating the Z-Drive. Four seconds into the past is all I need.',
                author: 'Ekko',
                created_at: 'Yesterday at 9:50 PM',
                delivery_status: 'seen'
            },
            {
                id: 2,
                content: 'Did the crystal hold up during high-voltage jumps?',
                author: 'Me',
                created_at: 'Yesterday at 9:58 PM',
                delivery_status: 'seen'
            },
            {
                id: 3,
                content: 'Smooth as silk. The Firelights managed to secure the lower Zaun supply line too.',
                author: 'Ekko',
                created_at: 'Yesterday at 10:01 PM',
                delivery_status: 'seen'
            },
            {
                id: 4,
                content: 'Good job. What\'s the plan for tonight?',
                author: 'Me',
                created_at: 'Yesterday at 10:05 PM',
                delivery_status: 'seen'
            },
            {
                id: 5,
                content: 'Checking on the mural tree and testing the hoverboard on the old bridge.',
                author: 'Ekko',
                created_at: 'Yesterday at 10:08 PM',
                delivery_status: 'seen'
            },
            {
                id: 6,
                content: 'If you need a quick rewind, you know where our hideout is.',
                author: 'Ekko',
                created_at: 'Yesterday at 10:10 PM',
                delivery_status: 'seen'
            }
        ]
    },
    {
        id: 5,
        name: 'Vi',
        status: 'dnd',
        image: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Vi.png',
        banner_color: '#c0392b',
        member_since: 'Dec 19, 2012',
        description: 'Former street fighter turned Enforcer of Piltover, smashing crime with her colossal Atlas Gauntlets.',
        messages: [
            {
                id: 1,
                content: 'My Atlas gauntlets just smashed through a reinforced steel vault door. Feeling great.',
                author: 'Vi',
                created_at: 'Today at 3:10 PM',
                delivery_status: 'seen'
            },
            {
                id: 2,
                content: 'Did Caitlyn clear the operation with the Council first?',
                author: 'Me',
                created_at: 'Today at 3:15 PM',
                delivery_status: 'seen'
            },
            {
                id: 3,
                content: 'Punch first. Ask questions while punching. That\'s my motto.',
                author: 'Vi',
                created_at: 'Today at 3:18 PM',
                delivery_status: 'seen'
            },
            {
                id: 4,
                content: 'Haha, classic Vi. Any signs of Jinx?',
                author: 'Me',
                created_at: 'Today at 3:20 PM',
                delivery_status: 'unseen'
            },
            {
                id: 5,
                content: 'Just a trail of neon blue paint and spent shell casings. We are close.',
                author: 'Vi',
                created_at: 'Today at 3:25 PM',
                delivery_status: 'unseen'
            },
            {
                id: 6,
                content: 'Going radio silent for a bit, gotta breach the lower sector.',
                author: 'Vi',
                created_at: 'Today at 3:27 PM',
                delivery_status: 'unseen'
            }
        ]
    },
    {
        id: 6,
        name: 'Lux',
        status: 'online',
        image: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Lux.png',
        banner_color: '#f39c12',
        member_since: 'Oct 19, 2010',
        description: 'A bright Demacian mage of the Crownguard family, secretly channeling radiant light magic.',
        messages: [
            {
                id: 1,
                content: 'Good morning! The sun is shining bright over the Demacian gates today!',
                author: 'Lux',
                created_at: 'Today at 8:00 AM',
                delivery_status: 'seen'
            },
            {
                id: 2,
                content: 'Did you manage to avoid the Mageseeker patrols this morning?',
                author: 'Me',
                created_at: 'Today at 8:12 AM',
                delivery_status: 'seen'
            },
            {
                id: 3,
                content: 'Yes, kept my light magic calm and tucked under my cloak.',
                author: 'Lux',
                created_at: 'Today at 8:15 AM',
                delivery_status: 'seen'
            },
            {
                id: 4,
                content: 'Your brother Garen was asking about you earlier.',
                author: 'Me',
                created_at: 'Today at 8:20 AM',
                delivery_status: 'seen'
            },
            {
                id: 5,
                content: 'I know... he worries too much. But light always finds a way to break through darkness.',
                author: 'Lux',
                created_at: 'Today at 8:22 AM',
                delivery_status: 'seen'
            },
            {
                id: 6,
                content: 'I\'m heading to Terbisia to help the refugees. Stay safe out there!',
                author: 'Lux',
                created_at: 'Today at 8:24 AM',
                delivery_status: 'unseen'
            }
        ]
    },
    {
        id: 7,
        name: 'Zed',
        status: 'offline',
        image: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Zed.png',
        banner_color: '#2c3e50',
        member_since: 'Nov 13, 2012',
        description: 'Master of the Order of Shadow, wielding forbidden shadow magic to ruthlessly defend Ionia.',
        messages: [
            {
                id: 1,
                content: 'Master Zed, the shadows report movement along the southern temple.',
                author: 'Me',
                created_at: 'Today at 4:00 PM',
                delivery_status: 'seen'
            },
            {
                id: 2,
                content: 'The Order of Shadow is already in position. The unseen blade is the deadliest.',
                author: 'Zed',
                created_at: 'Today at 4:05 PM',
                delivery_status: 'seen'
            },
            {
                id: 3,
                content: 'Shall we intercept before the Kinkou arrive?',
                author: 'Me',
                created_at: 'Today at 4:08 PM',
                delivery_status: 'seen'
            },
            {
                id: 4,
                content: 'Shen must not interfere. The balance he seeks is a weakness Ionia cannot afford.',
                author: 'Zed',
                created_at: 'Today at 4:10 PM',
                delivery_status: 'seen'
            },
            {
                id: 5,
                content: 'Remain hidden until darkness falls. We strike in unison.',
                author: 'Zed',
                created_at: 'Today at 4:15 PM',
                delivery_status: 'seen'
            }
        ]
    },
    {
        id: 8,
        name: 'Thresh',
        status: 'idle',
        image: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Thresh.png',
        banner_color: '#16a085',
        member_since: 'Jan 23, 2013',
        description: 'A sadistic specter of the Shadow Isles who torments the living and reaps souls into his lantern.',
        messages: [
            {
                id: 1,
                content: 'What delightful agony awaits in the mist tonight...',
                author: 'Thresh',
                created_at: 'Yesterday at 5:40 PM',
                delivery_status: 'seen'
            },
            {
                id: 2,
                content: 'The lantern\'s glow is getting brighter, Chain Warden.',
                author: 'Me',
                created_at: 'Yesterday at 5:48 PM',
                delivery_status: 'seen'
            },
            {
                id: 3,
                content: 'Fresh souls are always so eager to join the collection. They cry, they bargain...',
                author: 'Thresh',
                created_at: 'Yesterday at 5:50 PM',
                delivery_status: 'seen'
            },
            {
                id: 4,
                content: 'Lucian is hunting you across the archipelago.',
                author: 'Me',
                created_at: 'Yesterday at 5:55 PM',
                delivery_status: 'seen'
            },
            {
                id: 5,
                content: 'Let the gunslinger come. His desperation makes for such sweet suffering.',
                author: 'Thresh',
                created_at: 'Yesterday at 6:00 PM',
                delivery_status: 'seen'
            }
        ]
    },
    {
        id: 9,
        name: 'Caitlyn',
        status: 'online',
        image: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Caitlyn.png',
        banner_color: '#2980b9',
        member_since: 'Jan 4, 2011',
        description: 'The Sheriff of Piltover and brilliant investigator dedicated to keeping peace across the twin cities.',
        messages: [
            {
                id: 1,
                content: 'Report from the Sheriff\'s office: all checkpoints along the Promenade are active.',
                author: 'Caitlyn',
                created_at: 'Today at 7:00 AM',
                delivery_status: 'seen'
            },
            {
                id: 2,
                content: 'Any leads on the stolen Hextech components?',
                author: 'Me',
                created_at: 'Today at 7:04 AM',
                delivery_status: 'seen'
            },
            {
                id: 3,
                content: 'We found a customized cupcake trap in the ventilation ducts. Definitely chemtech tampering.',
                author: 'Caitlyn',
                created_at: 'Today at 7:06 AM',
                delivery_status: 'seen'
            },
            {
                id: 4,
                content: 'Have you coordinated with Vi yet?',
                author: 'Me',
                created_at: 'Today at 7:10 AM',
                delivery_status: 'seen'
            },
            {
                id: 5,
                content: 'She charged ahead without waiting for backup, as usual. I\'m heading out with the sniper squad.',
                author: 'Caitlyn',
                created_at: 'Today at 7:12 AM',
                delivery_status: 'seen'
            },
            {
                id: 6,
                content: 'Keep your comms open in case we need extra perimeter control.',
                author: 'Caitlyn',
                created_at: 'Today at 7:18 AM',
                delivery_status: 'unseen'
            }
        ]
    },
    {
        id: 10,
        name: 'Teemo',
        status: 'offline',
        image: 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Teemo.png',
        banner_color: '#27ae60',
        member_since: 'Feb 21, 2009',
        description: 'A legendary Bandle City scout who upholds the Scout\'s Code with swift darts and toxic mushrooms.',
        messages: [
            {
                id: 1,
                content: 'Captain Teemo on duty! Scouting reports for sector 4 completed, sir!',
                author: 'Teemo',
                created_at: 'Today at 9:00 AM',
                delivery_status: 'seen'
            },
            {
                id: 2,
                content: 'How many poisonous mushrooms did you plant along the river path?!',
                author: 'Me',
                created_at: 'Today at 9:05 AM',
                delivery_status: 'seen'
            },
            {
                id: 3,
                content: 'Just enough for tactical area denial! One step and... POP! Haha!',
                author: 'Teemo',
                created_at: 'Today at 9:08 AM',
                delivery_status: 'seen'
            },
            {
                id: 4,
                content: 'Even our own allies are afraid to step into the tall grass.',
                author: 'Me',
                created_at: 'Today at 9:10 AM',
                delivery_status: 'seen'
            },
            {
                id: 5,
                content: 'Never underestimate the power of the Scout\'s Code! Stealth mode engaged.',
                author: 'Teemo',
                created_at: 'Today at 9:15 AM',
                delivery_status: 'seen'
            }
        ]
    }
];