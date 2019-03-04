/**
 * This script is in charge of performing the transformation from a Lambda AFN to a AFD
 *
 * @author      David Aguilar
 * @author      Andrea Becerra
 * @author      Saul Neri
 * @version     1.0.0
 * @since       1.0.0
 */
require('./FiniteAutomata');

function transformation(automata) {
  Q = new FiniteAutoma();
  Q.addInitial(automata.initial);

  newState = closureOfClosure(automata);
}
function closureOfClosure(automata, state, letter) {
  var arr = automata.lambdaLock(state);
  arr.forEach(element => {
    //buscar los estados finales a donde llegan con letter
    var transitions = automata.transitions[letter].filter(elem => {
      return elem.initial === state;
    });

    return transitions
      .forEach(elem => {
        return automata.lambdaLock(elem);
      })
      .join(',');
  });
}
