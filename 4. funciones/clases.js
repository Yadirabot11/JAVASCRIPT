//ejercicios con clases
//diseñar una clase para mi entidad celular
//tendra como atributos numero, marca. modelo, capacidad de bateria
//tendra como metodos enciende, apagar, llamar, colgar, enviar mensaje.

class Celular {
    constructor(numero, marca, modelo, capacidadBateria) {
        this.numero = numero; // Número de teléfono (atributo único de cada celular)
        this.marca = marca; // Marca del celular (Samsung, Apple, etc.)
        this.modelo = modelo; // Modelo del celular (Galaxy, iPhone 12, etc.)
        this.capacidadBateria = capacidadBateria; // Capacidad de la batería (en mAh)
        this.encendido = false; // Estado de encendido/apagado
        this.bateria = 100; // Batería en porcentaje (comienza al 100%)
        this.llamando = false; // Estado de la llamada (inicia en falso)
    }

    encender() {
        if (!this.encendido) {
            this.encendido = true;
            console.log(`El celular ${this.modelo} de ${this.marca} está encendido.`);
        } else {
            console.log(`El celular ya está encendido.`);
        }
    }

    apagar() {
        if (this.encendido) {
            this.encendido = false;
            console.log(`El celular ${this.modelo} de ${this.marca} está apagado.`);
        } else {
            console.log(`El celular ya está apagado.`);
        }
    }

    llamar(numeroDestino) {
        if (this.encendido && !this.llamando) {
            if (this.bateria > 0) {
                this.llamando = true;
                console.log(`Llamando al número ${numeroDestino} desde ${this.numero}...`);
            } else {
                console.log('No se puede realizar la llamada. La batería está agotada.');
            }
        } else if (!this.encendido) {
            console.log('El celular está apagado. Enciéndelo para llamar.');
        } else if (this.llamando) {
            console.log('Ya estás en una llamada.');
        }
    }

    colgar() {
        if (this.encendido && this.llamando) {
            this.llamando = false;
            console.log('La llamada ha terminado.');
        } else {
            console.log('No hay llamada en curso para colgar.');
        }
    }

    enviarMensaje(numeroDestino, mensaje) {
        if (this.encendido) {
            if (this.bateria > 0) {
                console.log(`Enviando mensaje a ${numeroDestino}: "${mensaje}"`);
                this.bateria -= 1; 
                if (this.bateria <= 0) {
                    console.log('La batería está agotada. Recarga el celular.');
                }
            } else {
                console.log('No se puede enviar el mensaje. La batería está agotada.');
            }
        } else {
            console.log('El celular está apagado. Enciéndelo para enviar mensajes.');
        }
    }
    mostrarEstadoBateria() {
        console.log(`La batería del celular ${this.modelo} está al ${this.bateria}%`);
    }
}