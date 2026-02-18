import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Star,
  Users,
  BookOpen,
  Zap,
  Lock,
} from "lucide-react";

const metaboliquesModules = [
  {
    title: "Dysnatrémie",
    desc: "Hyponatrémie & hypernatrémie : physiopathologie, diagnostic et correction sécurisée.",
  },
  {
    title: "Dyskaliémie",
    desc: "Hypokaliémie & hyperkaliémie : ECG, algorithmes de prise en charge et traitements.",
  },
  {
    title: "Dyscalcémie",
    desc: "Hypocalcémie & hypercalcémie : symptômes, traitement d'urgence et suivi.",
  },
  {
    title: "Acidocétose Diabétique (ACD)",
    desc: "Protocole complet : réhydratation, insulinothérapie, correction électrolytique, surveillance.",
  },
  {
    title: "Syndrome Hyperosmolaire",
    desc: "Diagnostic différentiel avec l'ACD, prise en charge spécifique et pièges à éviter.",
  },
  {
    title: "Hypoglycémie",
    desc: "Conduite à tenir en urgence, resucrage, causes et prévention des récidives.",
  },
  {
    title: "Insuffisance Rénale Aiguë (IRA)",
    desc: "Classification KDIGO, étiologies, traitement conservateur et indications de dialyse.",
  },
];

const conduitesModules = [
  { title: "OAP (Œdème Aigu du Poumon)", category: "Cardiologie" },
  { title: "Poussée hypertensive", category: "Cardiologie" },
  { title: "Embolie pulmonaire", category: "Pneumologie" },
  { title: "Crise d'asthme aiguë", category: "Pneumologie" },
  { title: "AVC ischémique", category: "Neurologie" },
  { title: "AVC hémorragique", category: "Neurologie" },
  { title: "Accident aux AVK", category: "Hématologie" },
  { title: "HNF & HBPM — Posologie & surdosage", category: "Hématologie" },
  { title: "Angine enfant et adulte", category: "ORL" },
  { title: "Rhinosinusite aiguë", category: "ORL" },
  { title: "Intoxication au CO", category: "Toxicologie" },
  { title: "Intoxication au paracétamol", category: "Toxicologie" },
  { title: "Intoxication aux raticides", category: "Toxicologie" },
  { title: "Envenimation scorpionique", category: "Toxicologie" },
  { title: "Anaphylaxie", category: "Allergologie" },
  { title: "Troubles hydroélectrolytiques", category: "Métabolisme" },
  { title: "Migraine aux urgences", category: "Neurologie" },
  { title: "Électrisation", category: "Traumatologie" },
  { title: "Constat de décès", category: "Médico-légal" },
  { title: "Et 11 autres conduites pratiques…", category: "+" },
];

export default function FormationsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="brand-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="inline-block px-4 py-1 rounded-full bg-white/15 border border-white/25 text-sm font-medium text-white/90 mb-6">
            Nos formations
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5">
            Deux formations pour
            <br />
            <span className="text-orange-300">maîtriser les urgences</span>
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Des protocoles pratiques, des algorithmes décisionnels et des
            ordonnances types adaptés à la réalité hospitalière algérienne.
          </p>
        </div>
      </section>

      {/* Course 1 */}
      <section id="metaboliques" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl brand-gradient flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">01</span>
            </div>
            <div>
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
                Formation 01
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1 mb-3">
                Formation des Urgences Métaboliques
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                Maîtrisez les 7 urgences métaboliques les plus critiques avec
                une physiopathologie simplifiée, des algorithmes de traitement
                et des dosages exacts.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Modules */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Modules inclus
              </h3>
              {metaboliquesModules.map((mod, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:border-purple-200 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {mod.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing card */}
            <div className="sticky top-20 h-fit">
              <div className="rounded-2xl border-2 border-purple-200 overflow-hidden shadow-xl shadow-purple-100/50">
                <div className="brand-gradient p-6 text-white text-center">
                  <p className="text-purple-200 text-sm mb-2">Accès complet</p>
                  <div className="text-4xl font-bold mb-1">2 500 DA</div>
                  <p className="text-purple-200 text-xs">Accès à vie · Mise à jour incluse</p>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-3 mb-6">
                    {[
                      "7 modules complets",
                      "Physiopathologie simplifiée",
                      "Algorithmes pratiques",
                      "Dosages exacts",
                      "Protocoles cliniques",
                      "Cas cliniques réels",
                      "Accès à vie",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block w-full text-center py-3.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm transition-colors"
                  >
                    S&apos;inscrire maintenant
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-xs">
                    <Lock className="w-3.5 h-3.5" />
                    Paiement sécurisé · Accès immédiat
                  </div>
                </div>
              </div>

              {/* Trust */}
              <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-100">
                <div className="flex items-center gap-2 text-green-700 font-semibold text-sm mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  Garantie satisfaction
                </div>
                <p className="text-xs text-green-600">
                  Si vous n&apos;êtes pas satisfait dans les 7 jours, nous vous
                  remboursons intégralement.
                </p>
              </div>
            </div>
          </div>

          {/* What you will master */}
          <div className="mt-14 p-8 rounded-2xl bg-purple-50 border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Ce que vous maîtriserez
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Corriger une hyponatrémie sans danger",
                "Traiter une hyperkaliémie en urgence",
                "Gérer une acidocétose diabétique seul",
                "Distinguer ACD du syndrome hyperosmolaire",
                "Resucrer efficacement en cas d'hypoglycémie sévère",
                "Évaluer et traiter une IRA selon les stades",
                "Appliquer les dosages exacts en toute confiance",
                "Rédiger des prescriptions correctes et complètes",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Who it's for */}
          <div className="mt-8 p-8 rounded-2xl bg-gray-50 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Pour qui est cette formation ?
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Étudiants en médecine (5ème & 6ème année)",
                "Médecins nouvellement recrutés",
                "Médecins généralistes",
                "Résidents en médecine interne",
                "Urgentistes en formation",
              ].map((p) => (
                <span
                  key={p}
                  className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-700 font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-2 bg-gradient-to-r from-purple-600 via-orange-500 to-orange-600" />

      {/* Course 2 */}
      <section id="conduites" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl brand-gradient-orange flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">02</span>
            </div>
            <div>
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
                Formation 02
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1 mb-3">
                Les 30 Conduites Pratiques en Médecine d&apos;Urgence
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                30 conduites 100% pratiques que l&apos;on rencontre quotidiennement
                aux urgences — avec ordonnances types et traitements disponibles
                en Algérie.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
                <Star className="w-4 h-4 fill-orange-500" />
                Formation la plus complète
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Modules grid */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Les 30 conduites couvertes
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {conduitesModules.map((mod, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border bg-white transition-colors hover:border-orange-200 ${
                      mod.category === "+" ? "border-dashed border-orange-200 bg-orange-50" : "border-gray-100"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 px-2 py-0.5 rounded-md text-xs font-bold ${
                        mod.category === "Cardiologie"
                          ? "bg-red-100 text-red-700"
                          : mod.category === "Pneumologie"
                          ? "bg-sky-100 text-sky-700"
                          : mod.category === "Neurologie"
                          ? "bg-indigo-100 text-indigo-700"
                          : mod.category === "Hématologie"
                          ? "bg-pink-100 text-pink-700"
                          : mod.category === "Toxicologie"
                          ? "bg-yellow-100 text-yellow-700"
                          : mod.category === "ORL"
                          ? "bg-teal-100 text-teal-700"
                          : mod.category === "Allergologie"
                          ? "bg-green-100 text-green-700"
                          : mod.category === "Métabolisme"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {mod.category}
                    </span>
                    <p className="text-sm text-gray-800 font-medium leading-snug">
                      {mod.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing card */}
            <div className="sticky top-20 h-fit">
              <div className="rounded-2xl border-2 border-orange-200 overflow-hidden shadow-xl shadow-orange-100/50">
                <div className="brand-gradient-orange p-6 text-white text-center">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold mb-3">
                    BEST-SELLER
                  </div>
                  <p className="text-orange-100 text-sm mb-2">Accès complet</p>
                  <div className="text-4xl font-bold mb-1">3 500 DA</div>
                  <p className="text-orange-100 text-xs">Accès à vie · Ordonnances types incluses</p>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-3 mb-6">
                    {[
                      "30 conduites pratiques",
                      "Ordonnances types prêtes",
                      "Médicaments disponibles en DZ",
                      "Algorithmes décisionnels",
                      "Conseils pour nouveaux médecins",
                      "Cas cliniques réels",
                      "Accès à vie",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block w-full text-center py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-colors"
                  >
                    S&apos;inscrire maintenant
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-xs">
                    <Lock className="w-3.5 h-3.5" />
                    Paiement sécurisé · Accès immédiat
                  </div>
                </div>
              </div>

              {/* Bundle offer */}
              <div className="mt-4 p-4 rounded-xl bg-purple-50 border border-purple-200">
                <p className="text-purple-800 font-bold text-sm mb-1">
                  Pack Complet — 2 formations
                </p>
                <p className="text-purple-700 text-xs mb-3">
                  Obtenez les deux formations à prix réduit
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 line-through text-sm">6 000 DA</span>
                  <span className="text-purple-700 font-bold text-lg">5 000 DA</span>
                </div>
                <Link
                  href="/contact"
                  className="block w-full text-center py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm transition-colors"
                >
                  Obtenir le Pack
                </Link>
              </div>
            </div>
          </div>

          {/* Core promise */}
          <div className="mt-14 p-8 rounded-2xl bg-orange-50 border border-orange-200 text-center">
            <div className="w-14 h-14 rounded-2xl brand-gradient-orange flex items-center justify-center mx-auto mb-5 shadow-lg">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              La promesse de cette formation
            </h3>
            <p className="text-lg text-gray-700 max-w-xl mx-auto font-medium">
              &ldquo;Soyez prêt(e) à agir efficacement aux urgences dès votre premier
              jour et développez votre confiance clinique.&rdquo;
            </p>
          </div>

          {/* Advantages */}
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Ordonnances types",
                desc: "Prescriptions prêtes pour les pathologies courantes aux urgences",
                color: "orange",
              },
              {
                icon: ShieldCheck,
                title: "Médicaments DZ",
                desc: "Uniquement les médicaments réellement disponibles en Algérie",
                color: "purple",
              },
              {
                icon: Users,
                title: "Pour nouveaux médecins",
                desc: "Conseils pratiques spécifiques aux jeunes recrutés",
                color: "orange",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    item.color === "orange" ? "bg-orange-100" : "bg-purple-100"
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 ${
                      item.color === "orange" ? "text-orange-600" : "text-purple-700"
                    }`}
                  />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 brand-gradient">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Prêt(e) à commencer votre formation ?
          </h2>
          <p className="text-purple-100 mb-8">
            Accédez immédiatement après votre paiement sécurisé.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-all shadow-xl text-base"
          >
            S&apos;inscrire maintenant
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
