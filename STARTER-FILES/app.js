"use strict";
class StartReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            episodes: [
                {
                    'id': 1,
                    'name': 'James Q Quick\'s Origin Story',
                    'checked': false
                },
                {
                    'id': 2,
                    'name': 'Amy Dutton\'s Origin Story',
                    'checked': false
                },
                {
                    'id': 3,
                    'name': 'The Tech Behind Compressed.fm',
                    'checked': false
                },
                {
                    'id': 4,
                    'name': 'Starting a New Development Project',
                    'checked': false
                },
                {
                    'id': 5,
                    'name': 'How Do you Start a New Design Project?',
                    'checked': false
                },
                {
                    'id': 6,
                    'name': 'Freelancing (Part 1)',
                    'checked': false
                },
                {
                    'id': 7,
                    'name': 'Freelancing (Part 2)',
                    'checked': false
                },
                {
                    'id': 8,
                    'name': 'The Tech Behind jamesqquick.com',
                    'checked': false
                },
                {
                    'id': 9,
                    'name': 'Teh Tech Behind SelfTeach.me',
                    'checked': false
                },
                {
                    'id': 10,
                    'name': 'Design Fundamentals (Part 1)',
                    'checked': false
                },
                {
                    'id': 11,
                    'name': 'Design Fundamentals (Part 2)',
                    'checked': false
                },
                {
                    'id': 12,
                    'name': 'Productivity: Tools, Tips, and Workflows',
                    'checked': false
                },
                {
                    'id': 13,
                    'name': 'The Future of Code with No Code',
                    'checked': false
                },
                {
                    'id': 14,
                    'name': 'Building the Perfect Desk Setup',
                    'checked': false
                },
                {
                    'id': 15,
                    'name': 'Everything You Need to Know to Get Started in SvelteKit',
                    'checked': false
                },
                {
                    'id': 16,
                    'name': 'Live Streaming for Beginners',
                    'checked': false
                },
                {
                    'id': 17,
                    'name': 'All Things Automated',
                    'checked': false
                },
                {
                    'id': 18,
                    'name': 'Amy Gives James a Design Consult',
                    'checked': false
                },
                {
                    'id': 19,
                    'name': 'Figma for Everyone',
                    'checked': false
                },
                {
                    'id': 20,
                    'name': 'Learning and Building in Public',
                    'checked': false
                },
                {
                    'id': 21,
                    'name': 'Getting Your First Dev Job',
                    'checked': false
                },
                {
                    'id': 22,
                    'name': 'Hiring a Designer or Getting Your First UI / UX Job',
                    'checked': false
                },
                {
                    'id': 23,
                    'name': 'IRL Freelance Proposal',
                    'checked': false
                },
                {
                    'id': 24,
                    'name': 'Getting Started on YouTube',
                    'checked': false
                },
                {
                    'id': 25,
                    'name': 'Starting your own Podcast',
                    'checked': false
                },
                {
                    'id': 26,
                    'name': 'How Blogging Can Change Your Career',
                    'checked': false
                },
                {
                    'id': 27,
                    'name': 'Talking to Some of Our Favorite Content Creators',
                    'checked': false
                },
                {
                    'id': 28,
                    'name': 'Our Favorite Things: A Crossover Episode with Web Dev Weekly',
                    'checked': false
                },
                {
                    'id': 29,
                    'name': 'Freelancing IRL: Unveiling a Site Redesign',
                    'checked': false
                },
                {
                    'id': 30,
                    'name': 'Wordpress in 2021',
                    'checked': false
                },
                {
                    'id': 31,
                    'name': 'Struggle Bus',
                    'checked': false
                },
                {
                    'id': 32,
                    'name': 'Getting Started with TypeScript',
                    'checked': false
                },
                {
                    'id': 33,
                    'name': 'Small Design Tweaks that Make All the Difference',
                    'checked': false
                },
                {
                    'id': 34,
                    'name': 'Getting git',
                    'checked': false
                },
                {
                    'id': 35,
                    'name': 'Crossover Episode with Purrfect Dev',
                    'checked': false
                },
                {
                    'id': 36,
                    'name': 'SVGs FTW',
                    'checked': false
                },
                {
                    'id': 37,
                    'name': 'Building a Course',
                    'checked': false
                }
            ]
        }
    }
    render() {
        const checkedArr = this.state.episodes.filter(i => i.checked)
        // console.log(checkedArr[checkedArr.length - 1]);
        const episodesList = this.state.episodes.map(item => {
            const { id: number, name, checked: isChecked } = item;
            const setChecked = (number) => {
                this.setState(({ episodes }) => ({
                    episodes: [
                        ...episodes.slice(0, number),
                        {
                            ...episodes[number],
                            checked: !episodes[number].checked
                        },
                        ...episodes.slice(number + 1)
                    ]
                }))
            }
            const setCheckedRow = (e) => {
                const clickedNumber = +e.target.name.slice(8) - 1;
                if (e.altKey) {
                    // console.log(clickedNumber);
                    let lastEpisode = checkedArr?.[checkedArr.length - 1]?.id ?? 0;
                    if (clickedNumber < lastEpisode) {
                        const someCheckedArr = checkedArr.filter(i => i.id < clickedNumber)
                        lastEpisode = someCheckedArr[someCheckedArr.length - 1].id
                    }
                    for (let i = lastEpisode; i <= clickedNumber; i++) {
                        setChecked(i)
                    }
                } else {
                    setChecked(clickedNumber)
                }
            }
            return (
                <li key={number}>
                    <label htmlFor={`episode-${number}`}>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onClick={setCheckedRow}
                            readOnly
                            name={`episode-${number}`}
                            id={`episode-${number}`} />
                        <span>{number} || {name}</span>
                    </label>
                </li>
            )
        }
        )
        return (
            <ul>
                {episodesList}
            </ul>
        )
    }
}

ReactDOM.render(
    <StartReact />,
    document.getElementById("root_container")
)