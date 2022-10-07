import { EventType, eventModule } from '@sern/handler';
import { Client } from 'discord.js';

export default eventModule({
    type: EventType.Discord,
    name: 'ready',
    /**
     * 
     * @param {Client} client 
     */
    execute(client) {
        console.log(`${client.user.tag} has logged into Discord.`)
    }
})