import { Link } from "react-router-dom";

function Mentions() {

  return (
    <div className="bg-slate-950 flex flex-col justify-center p-4 md:p-8">
        <Link to="/" className="text-white text-sm md:text-lg md:hover:font-bold ">
            Retour à la page d'accueil
        </Link>
        <h2 className="text-2xl md:text-3xl text-center mb-4 mt-4">Statuts de l'association "Les Galopins" au 1/09/2004</h2>
        <h4 className="mentionsH4">Article 1 : Constitution et dénomination</h4>
        <p>
        Il est formé, entre les adhérents aux présents statuts, une association conforme à la loi du 1er juillet 1901 et au décret du 16 août 1901 ayant pour titre LES GALOPINS.
        </p>

        <h4 className="mentionsH4">Article 2 : Objet</h4>
        <p>
        LES GALOPINS ont pour but d’organiser des activités pédestres simples, accessibles à tous, destinées à la découverte de la nature dans la bonne humeur et la convivialité.
        LES GALOPINS ont également pour but d’organiser toutes sortes de manifestations visant à la promotion de l’alinéa ci-dessus.
        </p>

        <h4 className="mentionsH4">Article 3 : Siège</h4>
        <p>
        Le siège social de l’Association est situé chez Monsieur Jean-Alain BOURSEAU, 8 chemin de la Rochelle à 26200 MONTELIMAR. Il pourra être transféré dans tout autre lieu sur simple décision du Conseil d’Administration.
        </p>

        <h4 className="mentionsH4">Article 4 : Durée</h4>
        <p>
        La durée de l’Association LES GALOPINS est illimitée.
        </p>

        <h4 className="mentionsH4">Article 5 : Composition</h4>
        <p>
        L’Association LES GALOPINS est composée par des adhérents, personnes physiques, poursuivant les buts de l’article 2.
        </p>

        <h4 className="mentionsH4">Article 6 : Conditions d’adhésion</h4>
        <p>
        Chaque adhérent prend l’engagement de respecter les statuts communiqués à son entrée dans l’association. Une cotisation annuelle est versée par chaque adhérent, son montant est fixé par le Conseil d’Administration au moment de l’assemblée générale.
        Chaque adhérent reconnaît avoir sa propre assurance (RC) et il engage sa propre responsabilité vis-à-vis de sa santé en rapport avec les activités décrites à l’article 2.
        Dans l’idée de garder à l’Association toute sa convivialité, le nombre des Adhérents est limité à 60.
        </p>

        <h4 className="mentionsH4">Article 7 : Perte de la qualité d’Adhérent</h4>
        <p>
        La qualité d’adhérent se perd par démission ou non-paiement de la cotisation annuelle.
        </p>

        <h4 className="mentionsH4">Article 8 : Ressources</h4>
        <p>
        Les ressources de l’Association LES GALOPINS proviennent :
        </p>
        <ul className="mentionsUl">
            <li>des cotisations annuelles des adhérents,</li>
            <li>des subventions publiques ou privées,</li>
            <li>de toutes autres ressources non prohibées par la loi.</li>
        </ul>

        <h4 className="mentionsH4">Article 9 : Conseil d’Administration</h4>
        <p>
        L’association LES GALOPINS est dirigée par un Conseil d’Administration composé de 5 à 8 membres. Ces membres ont chacun une voix délibérative. La voix du Président, en cas de partage, est prépondérante. Les membres du Conseil d'Administration sont élus ou cooptés pour 3 ans, leur mandat est renouvelable.
        Est éligible ou cooptable tout adhérent âgé de 18 ans au moins au jour de son entrée au Conseil d’Administration.
        </p>

        <h4 className="mentionsH4">Article 10 : Réunion du Conseil d’Administration</h4>
        <p>
        Le Conseil d’Administration se réunit chaque trimestre sur convocation de son Président ou à la demande du quart de ses membres.
        </p>

        <h4 className="mentionsH4">Article 11 : Le Bureau</h4>
        <p>
        Le Conseil d’Administration élit en son sein, par bulletin secret ou à main levée, un bureau chargé de l’exécution de la gestion courante. Il est composé de 3 personnes :
        </p>
        <ul className="mentionsUl">
            <li>un Président,</li>
            <li>un Secrétaire,</li>
            <li>un Trésorier.</li>
        </ul>
        <p>
        Les membres du Bureau sont désignés pour 3 ans, leur mandat est renouvelable.
        Le président représente l’Association en justice et dans tous les actes de la vie civile.
        </p>

        <h4 className="mentionsH4">Article 12 : Dispositions pour la tenue des Assemblées Générales</h4>
        <p>
        L’Assemblée générale ordinaire se tient chaque année au mois de JUIN, elle comprend tous les Adhérents de l’association LES GALOPINS. Chaque adhérent ne dispose que d’une seule voix. L’Assemblée générale ne peut se tenir que si la moitié des adhérents plus un sont présents ou représentés. Dans la négative, une deuxième assemblée générale est convoquée dans les 15 jours qui suivent et elle peut alors délibérer quel que soit le quorum.
        Le président, assisté des membres du bureau, préside l’Assemblée.
        </p>
        <p>
        Quinze jours au moins avant la date de l’assemblée, les adhérents sont convoqués par le secrétaire qui précise l’ordre du jour qui comporte obligatoirement :
        </p>
        <ul className="mentionsUl">
            <li>un compte rendu moral d’activité et d’orientation,</li>
            <li>un compte rendu de gestion,</li>
            <li>le renouvellement, si besoin est, du Conseil d’Administration.</li>
        </ul>
        <p>
        Les décisions sont prises à la majorité des votants. En cas de partage, la voix du Président est prépondérante.
        </p>

        <h4 className="mentionsH4">Article 13 : Procuration pour les Assemblées générales</h4>
        <p>
        En cas d’empêchement, tout adhérent peut donner procuration pour le représenter à un autre adhérent.
        </p>

        <h4 className="mentionsH4">Article 14 : Dissolution</h4>
        <p>
        En cas de dissolution demandée par au moins les deux tiers des adhérents présents à l’Assemblée Générale extraordinaire, un ou plusieurs liquidateurs sont nommés par celle-ci et l’actif, s’il y a lieu, est dévolu conformément à la loi du 1er juillet 1901 et au décret du 16 Août 1901.
        </p>
    </div>
  );
}

export default Mentions;
