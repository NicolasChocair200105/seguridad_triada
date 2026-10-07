import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  CheckCircle2, 
  Clock, 
  Lightbulb, 
  AlertTriangle,
  ServerCrash,
  FileWarning,
  EyeOff
} from 'lucide-react';

const triadData = [
  {
    id: 'confidencialidad',
    title: 'Confidencialidad',
    icon: Lock,
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-400',
    bgLight: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    definition: 'Garantiza que la información solo pueda ser vista por las personas autorizadas. Es el equivalente a mantener un secreto a salvo.',
    analogy: 'Imagina que tienes un diario íntimo con un candado. La confidencialidad significa que solo tú tienes la llave para leer lo que hay dentro. Si alguien más lo abre, se rompió la confidencialidad.'
  },
  {
    id: 'integridad',
    title: 'Integridad',
    icon: CheckCircle2,
    color: 'emerald',
    gradient: 'from-emerald-500 to-green-400',
    bgLight: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    definition: 'Asegura que la información es exacta, completa y no ha sido modificada por nadie sin permiso, ni siquiera por accidente.',
    analogy: 'Es como enviar una carta por correo en un sobre sellado. La integridad asegura que el cartero no abrió el sobre, borró algunas palabras y escribió otras antes de entregarla.'
  },
  {
    id: 'disponibilidad',
    title: 'Disponibilidad',
    icon: Clock,
    color: 'amber',
    gradient: 'from-amber-500 to-orange-400',
    bgLight: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
    definition: 'Significa que los sistemas y la información deben estar accesibles y funcionando correctamente cuando los necesites.',
    analogy: 'Piensa en tu servicio de streaming favorito (como Netflix o Spotify). De nada sirve que tus películas estén seguras si el fin de semana la aplicación se cae y no puedes entrar a verlas.'
  }
];

const quizScenarios = [
  {
    scenario: "Un hacker adivina tu contraseña de Instagram y lee tus mensajes directos privados.",
    correctAnswer: 'confidencialidad',
    icon: EyeOff
  },
  {
    scenario: "Haces una transferencia de $10.000, pero un error en el sistema del banco hace que se envíen $100.000.",
    correctAnswer: 'integridad',
    icon: FileWarning
  },
  {
    scenario: "Quieres comprar entradas para un concierto, pero la página web colapsa porque hay mucha gente conectada.",
    correctAnswer: 'disponibilidad',
    icon: ServerCrash
  }
];

const PillarCard = ({ data, isActive, onClick }) => {
  const Icon = data.icon;
  
  return (
    <div 
      onClick={onClick}
      className={`relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-out border backdrop-blur-sm
        ${isActive ? `scale-105 shadow-2xl shadow-${data.color}-900/50 ${data.border} bg-slate-800/80` : `scale-100 border-slate-700 bg-slate-800/40 hover:bg-slate-800/60 hover:border-slate-600`}
      `}
    >
      {/* Decorative top border */}
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${data.gradient}`} />
      
      <div className="p-6 h-full flex flex-col">
        <div className={`inline-flex p-3 rounded-xl mb-4 self-start ${data.bgLight}`}>
          <Icon className={`w-8 h-8 ${data.text}`} />
        </div>
        
        <h3 className="text-2xl font-bold text-slate-100 mb-3">{data.title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
          {data.definition}
        </p>
        
        <div className={`mt-auto rounded-xl p-4 bg-slate-900/50 border ${data.border} transition-opacity duration-300`}>
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className={`w-5 h-5 ${data.text}`} />
            <span className="font-semibold text-slate-200 text-sm">La Analogía Sencilla</span>
          </div>
          <p className="text-slate-400 text-sm italic">
            "{data.analogy}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState(null);
  const [quizScores, setQuizScores] = useState({});

  const handleQuizAnswer = (scenarioIndex, answerId, isCorrect) => {
    setQuizScores(prev => ({
      ...prev,
      [scenarioIndex]: isCorrect ? 'correct' : 'incorrect'
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Background ambient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-900/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 -right-1/4 w-3/4 h-3/4 bg-emerald-900/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        
        {/* Header Section */}
        <header className="text-center mb-16 space-y-4 animate-fade-in-down">
          <div className="inline-flex items-center justify-center p-4 bg-slate-900 rounded-full mb-4 shadow-lg border border-slate-800">
            <Shield className="w-10 h-10 text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            La Tríada de la Información
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            También conocida como la <strong>Tríada CIA</strong>. Son las 3 reglas de oro que toda aplicación, banco o red social debe cumplir para mantener tus datos a salvo.
          </p>
        </header>

        {/* Infographic Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {triadData.map((pillar) => (
            <PillarCard 
              key={pillar.id}
              data={pillar}
              isActive={activeTab === pillar.id}
              onClick={() => setActiveTab(activeTab === pillar.id ? null : pillar.id)}
            />
          ))}
        </section>

        {/* Interactive Quiz Section */}
        <section className="max-w-4xl mx-auto bg-slate-900/50 rounded-3xl border border-slate-800 p-8 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-indigo-400" />
              ¿Qué pilar está fallando? (Mini-Juego)
            </h2>
            <p className="text-slate-400 text-sm">
              Lee las siguientes situaciones de la vida real y adivina cuál de los 3 pilares se acaba de romper.
            </p>
          </div>

          <div className="space-y-6">
            {quizScenarios.map((item, index) => {
              const ScenarioIcon = item.icon;
              const status = quizScores[index];
              
              return (
                <div key={index} className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-slate-950 p-2 rounded-lg">
                      <ScenarioIcon className="w-6 h-6 text-slate-300" />
                    </div>
                    <p className="text-slate-200 font-medium pt-1">
                      {item.scenario}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pl-14">
                    {triadData.map(pillar => {
                      const isSelectedCorrect = status === 'correct' && item.correctAnswer === pillar.id;
                      const isSelectedWrong = status === 'incorrect' && item.correctAnswer !== pillar.id; // Just simplifying UI feedback
                      
                      let buttonClass = "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ";
                      
                      if (status === 'correct' && item.correctAnswer === pillar.id) {
                        buttonClass += `bg-${pillar.color}-500/20 text-${pillar.color}-400 border-${pillar.color}-500/50 ring-1 ring-${pillar.color}-500`;
                      } else if (status) {
                         buttonClass += "bg-slate-800 text-slate-500 border-slate-700 opacity-50 cursor-not-allowed";
                      } else {
                        buttonClass += "bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800 hover:border-slate-500";
                      }

                      return (
                        <button
                          key={pillar.id}
                          disabled={!!status}
                          onClick={() => handleQuizAnswer(index, pillar.id, pillar.id === item.correctAnswer)}
                          className={buttonClass}
                        >
                          {pillar.title}
                        </button>
                      );
                    })}
                  </div>
                  
                  {/* Feedback Message */}
                  {status && (
                    <div className={`mt-4 pl-14 text-sm font-medium animate-fade-in ${status === 'correct' ? 'text-emerald-400' : 'text-red-400'}`}>
                      {status === 'correct' ? '¡Correcto! Entendiste el concepto a la perfección.' : 'Mmm, no exactamente. Intenta recargar la página para intentarlo de nuevo.'}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Footer / Dev info */}
        <footer className="mt-16 text-center text-slate-500 text-sm pb-8">
        </footer>

      </div>
    </div>
  );
}